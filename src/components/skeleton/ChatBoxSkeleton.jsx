import { Skeleton } from "@mui/material";

const ChatBoxSkeleton = () => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: "#253036", borderRadius: "10px", marginTop: "0.5rem" }}
        variant="rectangular"
        width={"60%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{
          bgcolor: "#015747",
          borderRadius: "10px",
          marginTop: "0.5rem",
          marginLeft: "auto",
        }}
        variant="rectangular"
        width={"50%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{ bgcolor: "#253036", borderRadius: "10px", marginTop: "0.5rem" }}
        variant="rectangular"
        width={"40%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{ bgcolor: "#253036", borderRadius: "10px", marginTop: "0.5rem" }}
        variant="rectangular"
        width={"50%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{
          bgcolor: "#015747",
          borderRadius: "10px",
          marginTop: "0.5rem",
          marginLeft: "auto",
        }}
        variant="rectangular"
        width={"40%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{
          bgcolor: "#015747",
          borderRadius: "10px",
          marginTop: "0.5rem",
          marginLeft: "auto",
        }}
        variant="rectangular"
        width={"30%"}
        height={"2rem"}
      />
      <Skeleton
        sx={{ bgcolor: "#253036", borderRadius: "10px", marginTop: "0.5rem" }}
        variant="rectangular"
        width={"20%"}
        height={"2rem"}
      />
    </>
  );
};

export default ChatBoxSkeleton;
