import { useEffect } from "react";
import useImageLoader, { ImageWrapper, StyledBlurhash } from "../../hooks/useImageLoader";

const Image = ({url, hash, width, height, Imgclass}) => {
    const { isLoaded, isLoadStarted, image } = useImageLoader(url);
    useEffect(()=>{
    },[isLoaded])
  return (
    <ImageWrapper>
        <img
          // src={`http://localhost:8000${user?.contact?.profile?.profile_picture ? user.contact.profile.profile_picture : "/media/"+user?.contact?.profile?.default_avatar }`}
          // alt=""
          src={image ? image.src : ''}
          className={Imgclass ? `${Imgclass}`: ""}
          width={width}
          height={height}
        
        />
        {!isLoaded && isLoadStarted && hash && (
        <StyledBlurhash
          hash={hash}
          width={width}
          height={height}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      </ImageWrapper>
  )
}

export default Image
