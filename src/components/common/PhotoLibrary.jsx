import { IoClose } from "react-icons/io5";
import { defaultAvatar, defaultAvatarHash } from "../../utils/encodeBlurHash";
import Image from "./Image";

const PhotoLibrary = ({
  setImage,
  hidePhotoLibrary,
  setIsUploadedImage,
  setImageBlurHash,
}) => {
  const images = defaultAvatar();
  return (
    <div className="fixed top-0 left-0 max-h-[100vh] max-w-[100vw] h-full w-full flex justify-center items-center z-10">
      <div className="h-max w-max bg-hero gap-6 rounded-lg p-4">
        <div
          className="pt-2 pr-2 cursor-pointer flex items-end justify-end "
          onClick={() => hidePhotoLibrary(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="grid grid-cols-3 justify-center items-center gap-16 p-20 w-full">
          {images.map((image, index) => (
              <div
                key={image.hash}
                onClick={() => {
                  setIsUploadedImage(false);
                  setImageBlurHash(image.hash);
                  setImage(image.url);
                  hidePhotoLibrary(false);
                }}
                className="rounded-[50%]"
              >
                <div className="h-24 w-24 cursor-pointer relative rounded-[50%]">
                  {/* <img src={image} alt="avatar" /> */}
                  <Image
                    url={image.url}
                    Imgclass={""}
                    // width={"6rem"}
                    // height={"6rem"}
                    hash={image.hash}
                  />
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoLibrary;
