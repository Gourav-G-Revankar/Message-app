import React from 'react'
import { useChatContext } from "./ChatProvider"

const ChatList = () => {

  const { chatList } = useChatContext();
  

  return (
    <>
      <div className='chatlist--container'>
        <ul>
          {chatList.map((chat, index) => (
            <li key={index}>{chat}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ChatList