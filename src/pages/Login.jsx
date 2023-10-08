import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { TextField } from "@mui/material";
import AuthWrapper from "../components/auth/AuthWrapper";
import AuthButton from "../components/button/AuthButton";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    phone_number: "",
    password: "",
  });
  const handleChange = (props) => (event) => {
    setUser({ ...user, [props]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(user).every((error) => error !== "")){
      let phoneNumber = user.phone_number;
    if (!phoneNumber.startsWith("+91")) {
      phoneNumber = "+91" + phoneNumber;
    }

    const updatedUser = { ...user, phone_number: phoneNumber };
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: LOGIN_USER, payload: updatedUser, navigate });
    }else {
      toast.warn("Enter valid details");
    }
    
  };
  return (
    <>
      <AuthWrapper type="Login Account">
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="phone_number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone
            </label>
            <TextField
              autoComplete="on"
              id="phone_number"
              onChange={handleChange("phone_number")}
              value={user.phone_number}
              label="Enter your phone number"
              placeholder="000 000 0000"
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
                  type: "number",
                },
              }}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <TextField
              onChange={handleChange("password")}
              value={user.password}
              id="password"
              label="Enter your password"
              placeholder="••••••••"
              variant="standard"
              color="success"
              className="w-full"
              style={{
                color: "white",
              }}
              InputLabelProps={{
                style: {
                  color: "white",
                },
              }}
              InputProps={{
                style: {
                  color: "white",
                },
                type: "password",
              }}
            />
          </div>

          <AuthButton name={"Login"} />
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Dont have an account?{" "}
            <Link
              to={"/register"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Register here
            </Link>
          </p>
        </form>
      </AuthWrapper>
    </>
  );
};

export default Login;
