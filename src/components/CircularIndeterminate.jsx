import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CircularIndeterminate() {
    const loading = useSelector((state)=>state.loading.state)
    useEffect(()=>{
    },[loading])
  return (
    <div className={`z-50 w-full h-screen flex justify-center items-center fixed bg-[#00000057] ${loading ? 'block' : 'hidden'}`}>
      <CircularProgress color='success' />
    </div>
  );
}