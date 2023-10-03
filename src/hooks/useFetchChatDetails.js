import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CHAT_DETAILS } from "../redux/sagas/types";
import { getChatDetails } from "../apis";
import { useQuery } from "react-query";
import { ChatActions } from "../redux/slice/chatDetailsSlice";

export default function useFetchChatDetails(selectedContactId) {
  // const selected = useSelector((state) => state.selected.user);
  const dispatch = useDispatch()
  const { data, error, isLoading, isSuccess } = useQuery(
    {
      enabled: !!selectedContactId,
      queryFn:() => getChatDetails(selectedContactId),
      queryKey: ["todos",{selectedContactId}],
      staleTime:Infinity,
      cacheTime:0,
      onSuccess: (res) => {
        dispatch(ChatActions.setChatId(res.data.chat.id));
        dispatch(ChatActions.setMessages(res.data.message));  
      }
    },
    
  );
  
  return {
    data,
    error,
    isLoading,
    isSuccess,
  };
}
