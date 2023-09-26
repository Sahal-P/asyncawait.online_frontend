import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { getContactLastMessage } from '../../apis';
import moment from 'moment';

const UserCardDetails = ({contact, isReaded}) => {
    // const { data, error, isLoading, isSuccess } = useQuery(
    //     {
    //       queryFn:() => getContactLastMessage(user?.contact?.id),
    //       staleTime:Infinity,
    //       cacheTime:0,
    //       onSuccess: (res) => {
    //         console.log('quer getContactLastMessage 1----',res);
    //       }
    //     },
        
    //   );
    useEffect(()=>{
    },[contact])
    
  return (
    <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
        <div>
          <h1 className="capitalize text-white">
            {contact?.contact?.profile?.username}
          </h1>
          <p
            className={`${isReaded ? "text-white" : "text-slate-500"} text-sm`}
          >
            {contact?.last_activity}
            {/* Hello world! */}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p
            className={
              isReaded
                ? "text-line text-xs font-medium"
                : "text-slate-700 font font-medium text-xs"
            }
          >
            {moment(contact?.last_activity_time).format("h:mm a")}
          </p>
          <div className="flex w-full">
            {contact?.unread_count > 0 ?  (
              <div className="w-[20px] h-[20px] bg-line rounded-full flex items-center justify-center">
                <p>{contact?.unread_count}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
  )
}

export default UserCardDetails
