import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

const CapturePhoto = ({ hide, setImage }) => {
  const videoRef = useRef(null);
  useEffect(() => {
    let stream;
    const startCam = async ()=> {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: false
        })
        console.log(stream,'ooooooooooooooooooooo');
        videoRef.current.srcObject = stream
    }
    startCam()
    return () => {
        stream?.getTracks().forEach(track => track.stop());
    }
  }, []);
  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    hide(false);
  };
  return (
    <div className="fixed top-0 left-0 max-h-[100vw] max-w-[100vw] h-full w-full flex justify-center items-center">
      <div className="h-max w-max bg-hero gap-6 rounded-lg p-4">
        <div
          className="pt-2 pr-2 cursor-pointer flex items-end justify-end "
          onClick={() => hide(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="flex justify-center">
          <video id="video" width={400} autoPlay ref={videoRef}></video>
        </div>
        <button
          className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-700 p-2 mb-10"
          onClick={capturePhoto}
        ></button>
      </div>
    </div>
  );
};

export default CapturePhoto;
