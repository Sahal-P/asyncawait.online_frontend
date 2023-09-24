import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { getContactLastMessage } from '../../apis';

const UserCardDetails = ({username, isReaded}) => {
    const { data, error, isLoading, isSuccess } = useQuery(
        {
          queryFn:() => getContactLastMessage(user?.contact?.id),
          staleTime:Infinity,
          cacheTime:0,
          onSuccess: (res) => {
            console.log('quer getContactLastMessage 1----',res);
          }
        },
        
      );
    
  return (
    <div className="h-full w-[80%] py-3 border-b-[1px] border-slate-700 border-wid mr-3 hover:border-0 flex justify-between group">
        <div>
          <h1 className="capitalize text-white">
            {username}
          </h1>
          <p
            className={`${isReaded ? "text-white" : "text-slate-500"} text-sm`}
          >
            {/* {user?.contact?.last_message} */}
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
            12.00
          </p>
          <div className="flex w-full">
            {isReaded ? (
              <div className="w-[20px] h-[20px] bg-line rounded-full flex items-center justify-center">
                <p>1</p>
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
