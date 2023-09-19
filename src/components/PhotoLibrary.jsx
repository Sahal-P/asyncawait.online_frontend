import { IoClose } from "react-icons/io5";
import one from "/src/assets/image/avatar/1.png";
import two from "/src/assets/image/avatar/2.png";
import three from "/src/assets/image/avatar/3.png";
import four from "/src/assets/image/avatar/4.png";
import five from "/src/assets/image/avatar/5.png";
import six from "/src/assets/image/avatar/6.png";
import seven from "/src/assets/image/avatar/7.png";
import eight from "/src/assets/image/avatar/8.png";
import nine from "/src/assets/image/avatar/9.png";

const PhotoLibrary = ({ setImage, hidePhotoLibrary, setIsUploadedImage }) => {
  const images = [one, two, three, four, five, six, seven, eight, nine];
  return (
    <div className="fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center">
      <div className="h-max w-max bg-hero gap-6 rounded-lg p-4">
        <div
          className="pt-2 pr-2 cursor-pointer flex items-end justify-end "
          onClick={() => hidePhotoLibrary(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-16 p-20 w-full">
          {images.map((image, index) => (
            <>
              <div
                onClick={() => {
                  setIsUploadedImage(false)
                  setImage(images[index]);
                  hidePhotoLibrary(false);
                }}
              >
                <div className="h-24 w-24 cursor-pointer relative">
                  <img src={image} alt="avatar" />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoLibrary;
