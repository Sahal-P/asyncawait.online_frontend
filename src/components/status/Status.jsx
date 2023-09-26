import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusActions } from "../../redux/slice/statusSlice";

const Status = () => {
    const dispatch = useDispatch()
    const Status = useSelector((state) => state.status);
    useEffect(()=>{
    },[Status])
    return (
      <div className={`${Status.view ? "block " : "hidden "}w-full h-full bg- fixed z-[999] inset-0 backdrop-blur-md`}>
        <div className="w-full h-[60px] flex items-center px-7 justify-start">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
          </div>
          <h1 className="text-white ml-4">status</h1>
          <button className="text-icon ml-auto" onClick={()=>dispatch(StatusActions.setView(false))}>
            <svg
              viewBox="0 0 24 24"
              height="24"
              width="24"
              preserveAspectRatio="xMidYMid meet"
              className=""
              version="1.1"
              x="0px"
              y="0px"
              enableBackground="new 0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.8,5.8l-1.6-1.6L12,10.4L5.8,4.2L4.2,5.8l6.2,6.2l-6.2,6.2l1.6,1.6l6.2-6.2l6.2,6.2l1.6-1.6L13.6,12 L19.8,5.8z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div
            style={{
              width: 400,
              height:400,
  
            }}
            className="text-center text-white overflow-hidden mb-[10rem]"
          >
            COMMING SOON...
          </div>
        </div>
      </div>
    );
}

export default Status
