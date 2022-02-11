import React, { useState } from 'react'
import { useChatContext } from './ChatProvider'
import { FaLocationArrow } from "react-icons/fa";

const ChatForm = () => {
  const { addChat } = useChatContext();
  const [chatItem, setChatItem] = useState('')

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!chatItem) {
      return
    }
    console.log(chatItem)
    addChat(chatItem) //adding chat to array list
    setChatItem('') //clearing the textbox
  }

  const handleOnClear = (e) => {
    e.preventDefault();
    if (!chatItem) {
      return
    }
    setChatItem('') //clearing the textbox
  }

  return (
    <div className='chatform--container'>
      <form onSubmit={handleOnSubmit}>
        <div className='chatform--clearbutton'>
          <button onClick={handleOnClear}>X</button>
        </div>
        <div className='chatform--button'>
          <input type="text" placeholder='Type Here' value={chatItem} onChange={e => setChatItem(e.target.value)} />
          <button type="submit"><FaLocationArrow /></button>
        </div>
      </form>
    </div>
  )
}

export default ChatForm