import Avatar from "../components/Avatar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import defaultAvatar from "/src/assets/image/default_avatar_1.png";
import { createProfileAPI } from "../apis";
import { useMutation } from "react-query";
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types";
import Cookies from "js-cookie";

const Onboarding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { reg_id } = useParams();
  const [image, setImage] = useState(defaultAvatar);
  const [isUploadedImage, setIsUploadedImage] = useState(false);
  const [UploadedImage, setUploadedImage] = useState(null);
  const [profile, setProfile] = useState({
    username: "",
    about: "",
  });

  const mutation = useMutation({
    mutationFn: (formData) => createProfileAPI(formData),
    onSuccess: async (res) => {
      console.log("I'm first!", res);
      if (res.status === 201) {
        const password = Cookies.get(import.meta.env.VITE_USER_PASS);
        const current_user = {
          phone_number: res.data.phone_number,
          password: atob(password),
        };
        console.log(current_user,'user');
        dispatch({ type: SET_LOADING, payload: true });
        dispatch({ type: LOGIN_USER, payload: current_user, navigate });
      }
    },
    onSettled: async () => {
      console.log("I'm second!");
    },
  });

  const handleChange = (props) => (event) => {
    console.log(props, event.target.value);
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
      }
    }
    formData.append("user", reg_id);

    mutation.mutate(formData);
  };
  return (
    <section className="bg-secondary">
      <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          {/* <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          /> */}
          Async Await
        </a>
        <div className="w-full bg-primary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create Profile
            </h1>
            <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
              <div className="text-center">
                <Avatar
                  type="xl"
                  image={image}
                  setImage={setImage}
                  setUploadedImage={setUploadedImage}
                  setIsUploadedImage={setIsUploadedImage}
                />
                <label
                  htmlFor="email"
                  className="block mt-2 mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Change Profile Photo
                </label>
                <span className="text-xs text-red-600 ">Invalid Email</span>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your username
                </label>
                <input
                  onChange={handleChange("username")}
                  value={profile.username}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="example_123"
                  required=""
                />
              </div>
              <span className="text-xs text-red-600">Invalid Username</span>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  About
                </label>
                <input
                  onChange={handleChange("about")}
                  value={profile.about}
                  type="text"
                  name="about"
                  id="about"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="about"
                />
              </div>
              <span className="text-xs text-red-600">Invalid About</span>

              <button
                type="submit"
                disabled={mutation.isLoading}
                className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {mutation.isLoading ? "Creating..." : "Create Profile"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
