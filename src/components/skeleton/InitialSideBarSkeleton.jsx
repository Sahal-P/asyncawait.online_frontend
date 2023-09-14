// import React from 'react'

import { Skeleton } from "@mui/material";

const InitialSideBarSkeleton = () => {
  return (
    <div className="p-4 items-center flex flex-col w-full h-full">
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton sx={{ bgcolor: "#253036", fontSize: "1rem", margin: "10px", width: "95%"}} variant="text" />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton sx={{ bgcolor: "#253036",marginRight:"auto", marginLeft: "10px" }} variant="circular" width={40} height={40} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />   
      <Skeleton sx={{ bgcolor: "#253036", margin: "10px", width:"95%" }} variant="rounded" height={60} />   
    </div>
  );
};

export default InitialSideBarSkeleton;
