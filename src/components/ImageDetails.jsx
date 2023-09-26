import { useContext, useEffect } from "react";
import { UserContext } from "../pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { ImageActions } from "../redux/slice/imageViewSlice";
import Image from "./common/Image";

const ImageDetails = () => {
  const dispatch = useDispatch()
  const ImageState = useSelector((state) => state.image);
  useEffect(()=>{
  },[ImageState])
  return (
    <div className={`${ImageState.view ? "block " : "hidden "}w-full h-full bg- fixed z-[999] inset-0 backdrop-blur-md`}>
      <div className="w-full h-[60px] flex items-center px-7 justify-start">
        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
        <Image Imgclass={""} url={ImageState?.detailse?.imgUrl} hash={ImageState?.detailse?.hash}/>
        </div>
        <h1 className="text-white ml-4">{ImageState?.detailse?.username}</h1>
        <button className="text-icon ml-auto" onClick={()=>dispatch(ImageActions.setView(false))}>
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
          className="overflow-hidden mb-[10rem]"
        >
          <Image Imgclass={""} width={400} height={400} url={ImageState?.detailse?.imgUrl} hash={ImageState?.detailse?.hash}/>
        </div>
      </div>
    </div>
  );
};

export default ImageDetails;
