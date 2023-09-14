import Avatar  from "../components/Avatar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import defaultAvatar from '../../public/default_avatar_1.png'

const Onboarding = () => {
    const dispatch = useDispatch();
  const [image, setImage] = useState(defaultAvatar)
    const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    confirm_password: "",
  });
  const handleChange = (props) => (event) => {
    console.log(props, event.target.value);
    setUser({ ...user, [props]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  //   const passwordPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

  //  if (!passwordPattern.test(user.password)) {
  //    console.log("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
  //    return;
  //  }
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
                <Avatar type='xl' image={image} setImage={setImage} />
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
                  Your Phone Number
                </label>
                <input
                  onChange={handleChange("phone_number")}
                  value={user.phone_number}
                  type="tel "
                  name="phone_number"
                  id="phone_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+91 000 000 0000"
                  required=""
                />
              </div>
              <span className="text-xs text-red-600">Invalid Phone Number</span>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  onChange={handleChange("username")}
                  value={user.username}
                  type="text"
                  name="username"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="sahal"
                  required=""
                />
              </div>
              <span className="text-xs text-red-600">Invalid Name</span>
             
              <span className="text-xs text-red-600">Password not Same</span>
              <div className="flex items-start">
                <div className="flex items-center h-5">
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
              <button
                type="submit"
                className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
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
          </div>
        </div>
      </div>
      
    </section>

  )
}

export default Onboarding
