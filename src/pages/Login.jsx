import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CircularIndeterminate from "../components/CircularIndeterminate";
import { Alert, TextField } from "@mui/material";

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
    let phoneNumber = user.phone_number;
    if (!phoneNumber.startsWith("+91")) {
      phoneNumber = phoneNumber;
      phoneNumber = "+91" + phoneNumber;
    }

    const updatedUser = { ...user, phone_number: phoneNumber };
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: LOGIN_USER, payload: updatedUser, navigate });
  };
  return (
    <>
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
                Login Account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </label>
                  {/* <input
              onChange={handleChange('phone_number')}
              value={user.phone_number}
              type="number"
              name="phone_number"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 000 000 0000"
              required=""
            /> */}
                  <TextField
                    onChange={handleChange("phone_number")}
                    value={user.phone_number}
                    // id="standard"
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
                  {/* <input
              onChange={handleChange('password')}
              value={user.password}
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            /> */}
                  <TextField
                    onChange={handleChange("password")}
                    value={user.password}
                    id="standard-textarea"
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

                <button
                  type="submit"
                  className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Login
                </button>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
