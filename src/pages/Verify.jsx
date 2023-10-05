import { Link, useNavigate } from "react-router-dom";
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Timer from "../components/Timer";
import AuthWrapper from "../components/auth/AuthWrapper";

const Verify = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    phone_number: "",
    password: "",
  });
  const handleChange = (props) => (event) => {
    setUser({ ...user, [props]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: LOGIN_USER, payload: user, navigate });
  };
  return (
    <>
      <AuthWrapper type={"Verify Email"}>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Check out the verification link sent to
          <Link
            to={"/register"}
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            {" "}
            sahal@gmail.com
          </Link>
        </p>
        <button
          type="submit"
          className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Resend Email
        </button>
      </AuthWrapper>
    </>
  );
};

export default Verify;
