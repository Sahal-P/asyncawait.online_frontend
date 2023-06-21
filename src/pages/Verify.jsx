import { Link, useNavigate } from "react-router-dom"
import { LOGIN_USER, SET_LOADING } from "../redux/sagas/types"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Timer from "../components/Timer";


const Verify = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
    const [user, setUser] = useState({
        phone_number: '',
        password: '',
    })
    const handleChange = (props) => (event) => {
        setUser({...user, [props]: event.target.value})
        console.log(user);
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({ type: SET_LOADING, payload: true});
      dispatch({ type: LOGIN_USER, payload: user , navigate});
    };
  return (
    <>
    <section className="bg-secondary">
  <div className="flex h-screen flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

    <div className="w-full bg-primary rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white ">
          Verify Email
        </h1>
        {/* <Timer/> */}
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Check out the verification link sent to
            <Link
              to={"/register"}
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            > sahal@gmail.com
            </Link>
          </p>
        <button
            type="submit"
            className="w-full bg-secondary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Resend Email
          </button>
      </div>
    </div>
  </div>
</section>
</>
  )
}

export default Verify
