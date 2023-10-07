import Avatar from "../components/auth/Avatar";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import defaultAvatar from "/src/assets/image/default_avatar_1.png";
import { createProfileAPI } from "../apis";
import { useMutation } from "react-query";
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types";
import Cookies from "js-cookie";
import AuthWrapper from "../components/auth/AuthWrapper";
import { TextField } from "@mui/material";

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reg_id } = useParams();
  const [image, setImage] = useState(defaultAvatar);
  const [imageBlurHash, setImageBlurHash] = useState(
    "UaHCZnoKG^WVL2ay#+j[I9fQ#6jZtnayZ~j["
  );
  const [isUploadedImage, setIsUploadedImage] = useState(false);
  const [UploadedImage, setUploadedImage] = useState(null);
  const [profile, setProfile] = useState({
    username: "",
    about: "",
  });

  const mutation = useMutation({
    mutationFn: (formData) => createProfileAPI(formData),
    onSuccess: async (res) => {
      if (res.status === 201) {
        const password = Cookies.get(import.meta.env.VITE_USER_PASS);
        const current_user = {
          phone_number: res.data.phone_number,
          password: atob(password),
        };
        dispatch({ type: SET_LOADING, payload: true });
        dispatch({ type: LOGIN_USER, payload: current_user, navigate });
      }
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  const handleChange = (props) => (event) => {
    setProfile({ ...profile, [props]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", profile.username);
    formData.append("about", profile.about);
    if (isUploadedImage) {
      formData.append("profile_picture", UploadedImage);
    } else {
      if (image === defaultAvatar) {
        formData.append("default_avatar", "default");
      } else {
        const match = image.match(/\/(\d+)\.png$/);
        formData.append("default_avatar", match[1]);
        console.log(match[1]);
      }
    }
    formData.append("picture_blurhash", imageBlurHash);
    formData.append("user", reg_id);

    mutation.mutate(formData);
  };

  useEffect(() => {}, [imageBlurHash]);
  return (
    <AuthWrapper type="Create Profile">
      <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
        <div className="text-center">
          <Avatar
            type="xl"
            image={image}
            setImage={setImage}
            setUploadedImage={setUploadedImage}
            setIsUploadedImage={setIsUploadedImage}
            setImageBlurHash={setImageBlurHash}
          />
          <p
            className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Change Profile Photo
          </p>
        </div>
        <div>
          <TextField
            onChange={handleChange("username")}
            value={profile.username}
            label="Username"
            placeholder="example_123"
            name="username"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="text"
            style={{
              color: "white",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              inputProps: {
                style: {
                  color: "white",
                },
              },
            }}
          />
        </div>
        <div>
          <TextField
            onChange={handleChange("about")}
            value={profile.about}
            label="About"
            placeholder="about"
            name="about"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="text"
            style={{
              color: "white",
            }}
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
            InputProps={{
              inputProps: {
                style: {
                  color: "white",
                },
              },
            }}
          />
        </div>
            <div className="pt-5"/>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          {mutation.isLoading ? "Creating..." : "Create Profile"}
        </button>
      </form>
    </AuthWrapper>
  );
};

export default Onboarding;
