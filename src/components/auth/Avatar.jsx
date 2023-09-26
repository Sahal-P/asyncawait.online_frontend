import { useEffect, useState } from 'react'
import { TbCameraPlus } from 'react-icons/tb/'
import AvatarContextMenu from './AvatarContextMenu'
import PhotoPicker from './PhotoPicker'
import CircularProgress from '@mui/material/CircularProgress';
import PhotoLibrary from '../common/PhotoLibrary'
import CapturePhoto from './CapturePhoto';
// import heic2any from 'heic2any';

import encodeImageToBlurhash from '../../utils/encodeBlurHash';


const Avatar = ({ type, image, setImage, setUploadedImage, setIsUploadedImage, setImageBlurHash}) => {
    const [isContextMenuOpen, setisContextMenuOpen] = useState(false)
    const [showPhotoLibrary, setshowPhotoLibrary] = useState(false)
    const [showCapturePhoto, setShowCapturePhoto] = useState(false)
    const [grabPhoto, setGrabPhoto] = useState(false)
    const [contextMenuCordinate, setisContextMenuCordinate] = useState({ x: 0, y: 0})
    const [isLoading, setIsLoading] = useState(false)
    const showContext = (e) => {
        e.preventDefault();
        setisContextMenuOpen(true)
        setisContextMenuCordinate({x: e.pageX, y: e.pageY})
    } 
    const contextMenuOptions = [
        { name: "Take Photo", callback: () => {
            setShowCapturePhoto(true)
        }},
        { name: "Choose from Library", callback: () => {
            setshowPhotoLibrary(true)
        }},
        { name: "Upload Photo", callback: () => {
            setGrabPhoto(true)
        }},
        { name: "Remove Photo", callback: () => {
            setImage('/public/default_avatar_1.png')
            setImageBlurHash('UaHCZnoKG^WVL2ay#+j[I9fQ#6jZtnayZ~j[')
        }
        },
    ]
    const photoPickerChange = async (e) => {
        setIsLoading(true)
        let file = e.target.files[0];
        // if (file.type === 'image/heic' || file.type === "") {
        //     console.log('yessss');
        //     const blob = await heic2any({ blob: file });
        //     const jpegFile = new File([blob], 'image.jpeg', { type: 'image/jpeg' });
        //     file = jpegFile;
        // }
        setUploadedImage(file)
        setIsUploadedImage(true)
        const reader = new FileReader()
        const data = document.createElement("img")
        reader.onload = function (event) {
            data.src = event.target.result;
            data.setAttribute('data-src', event.target.result);
        }
        reader.readAsDataURL(file)
        setTimeout(()=>{
            encodeImageToBlurhash(data.src)
            .then(hash => {
                setImageBlurHash(hash)
            }).catch(error => {
                console.error('Error:', error);
            });
            setImage(data.src)
            setIsLoading(false)
        },1000)
    }
    useEffect(()=>{
        if (grabPhoto) {
            const data = document.getElementById("photo-picker");
            data.click();
            document.body.onfocus = (e) => {
                setTimeout(()=>{
                    setGrabPhoto(false)
                },100)
            }
        }
    }, [grabPhoto])

    // useEffect(()=> {
    // },[image, isLoading])

  return (
    <>
    <div className="flex items-center justify-center">
      {
          type === 'xl' && 
          <div className='relative cursor-pointer  z-0 h-20 w-20 hover:opacity-30'
          id='context-opener'
          onClick={e=>showContext(e)}
          >
                <TbCameraPlus className="text-3xl text-white absolute bottom-0 right-0" id='context-opener' 
                onClick={e=>showContext(e)}
                />
            { isLoading ?  <CircularProgress color="success" /> : <img src={image} alt="avatar" className="rounded-full" id="context-opener"/>}
          </div>
        
      }
      
    </div>
    { isContextMenuOpen && (
        <AvatarContextMenu
        options={contextMenuOptions}
        cordinates={contextMenuCordinate}
        contextMenu={isContextMenuOpen}
        setContextMenu={setisContextMenuOpen} />
      )}
      {grabPhoto && <PhotoPicker onChange={photoPickerChange} /> }
      {showPhotoLibrary && <PhotoLibrary setImage={setImage} hidePhotoLibrary={setshowPhotoLibrary} setIsUploadedImage={setIsUploadedImage} setImageBlurHash={setImageBlurHash}/> }
      {showCapturePhoto && <CapturePhoto setImage={setImage} hide={setShowCapturePhoto}/> }
    </>
  )
}

export default Avatar
