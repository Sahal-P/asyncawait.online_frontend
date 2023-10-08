import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { REGISTER_USER, SET_LOADING } from "../redux/sagas/types";
import { toast } from "react-toastify";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthButton from "../components/button/authButton";

import { TextField } from "@mui/material";

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isPhoneNumber = (phoneNumber) => /^[0-9]{10,12}$/.test(phoneNumber);

const isPasswordValid = (password) => password.length >= 8;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const [user, setUser] = useState({
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (props) => (event) => {
    console.log(props, event.target.value);
    if (props === "email") {
      if (!isEmail(event.target.value))
        setErrors({ ...errors, email: "Invalid Email" });
      else setErrors({ ...errors, email: "" });
    }
    if (props === "phone_number") {
      if (!isPhoneNumber(event.target.value))
        setErrors({ ...errors, phone_number: "Invalid Phone Number" });
      else setErrors({ ...errors, phone_number: "" });
    }
    if (props === "password") {
      if (!isPasswordValid(event.target.value))
        setErrors({ ...errors, password: "Password must be min 8 chars" });
      else setErrors({ ...errors, password: "" });
    }
    if (props === "confirm_password") {
      if (user.password !== event.target.value)
        setErrors({ ...errors, confirm_password: "Password not Same" });
      else setErrors({ ...errors, confirm_password: "" });
    }

    setUser({ ...user, [props]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(errors).every((error) => error === "") && Object.values(user).every((error) => error !== "")) {
      let phoneNumber = user.phone_number;
      if (!phoneNumber.startsWith("+91")) {
        phoneNumber = "+91" + phoneNumber;
      }
      const updatedUser = { ...user, phone_number: phoneNumber };
      dispatch({ type: SET_LOADING, payload: true });
      dispatch({ type: REGISTER_USER, payload: updatedUser, navigate });
    } else {
      toast.warn("Please fill the form correctly");
    }
  };

  return (
    <AuthWrapper type="Create and account">
      <form className="space-y-4 md:space-y-2" onSubmit={handleSubmit}>
        <div>
          <TextField
            onChange={handleChange("email")}
            value={user.email}
            label="Email"
            placeholder="000 000 0000"
            name="email"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="email"
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
        <span className="text-xs text-red-600">{errors?.email}</span>
        <div>
          <TextField
            onChange={handleChange("phone_number")}
            value={user.phone_number}
            label="Phone number"
            placeholder="000 000 0000"
            name="phone_number"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="tel"
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
        <span className="text-xs text-red-600">{errors?.phone_number}</span>
        <div>
          <TextField
            onChange={handleChange("password")}
            value={user.password}
            label="Password"
            placeholder="000 000 0000"
            name="password"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="password"
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
        <span className="text-xs text-red-600">{errors?.password}</span>
        <div>
          <TextField
            onChange={handleChange("confirm_password")}
            value={user.confirm_password}
            label="Confirm Password"
            placeholder="000 000 0000"
            name="confirm_password"
            variant="standard"
            color="success"
            className="w-full text-white"
            type="password"
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
        <span className="text-xs text-red-600">{errors?.confirm_password}</span>
        <div className="flex items-start pt-3">
          <div className="flex items-center h-5 mb-3">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms"
              className="font-light text-gray-500 dark:text-gray-300"
            >
              I accept the{" "}
              <a className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <AuthButton name={"Create an account"} />

        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
      </form>
    </AuthWrapper>
  );
};

export default Register;
