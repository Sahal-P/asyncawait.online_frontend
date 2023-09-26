import { Skeleton } from "@mui/material";

const UsersCardSkeleton = () => {
  return (
    <div className="w-full h-[15rem] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4">
      <div className="max-w-xs  h-full mx-auto mt-8 bg-secondary shadow-xl rounded-lg text-gray-900 flex flex-col justify-center items-center gap-4">
      <Skeleton sx={{ bgcolor: "#233138"}} variant="circular" width={70} height={70} />
      <Skeleton sx={{ bgcolor: "#233138", width:"80%" }} variant="rounded" height={60} />

      </div>
    </div>
  );
};

export default UsersCardSkeleton;
