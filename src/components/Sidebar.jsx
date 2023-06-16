import { BiArrowBack } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className='absolute z-[99] w-full h-full bg-secondary'>
                {/* <div className="w-[160px] h-[182px] bg-primary origin-top-left z-[999] flex fixed items-center rounded-md">
                    <ul className="w-full text-white">
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Lihat foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Ambil foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Unggah foto</li>
                        <li className="py-2 hover:bg-secondary px-4 cursor-pointer">Hapus foto</li>
                    </ul>
                </div> */}
                <div className='bg-primary h-[110px] w-full flex py-4'>
                    <div className='flex items-center mt-auto ml-5'>
                        <BiArrowBack className='text-white text-2xl cursor-pointer' onClick={()=>setSideBar(false)}/>
                        <h1 className='text-xl text-white ml-8 font-medium'>Profile</h1>
                    </div>
                </div>
                <div className='w-full flex justify-center mt-8'>

                </div>
            </div>
  )
}

export default Sidebar
