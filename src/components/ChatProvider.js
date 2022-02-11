import { createContext, useContext, useState, useEffect } from "react";

const ChatContext = createContext();

const initialChatListState = [];

const ChatProvider= ({children}) => {
  const [chatList, setChatList] = useState(initialChatListState);
  const Local_Storage_key = 'messages';
  const addChat = (newChatItem) => {
    setChatList([...chatList, newChatItem])
  }

  useEffect(() => {
   const retriveContacts = JSON.parse(localStorage.getItem(Local_Storage_key))
   if (retriveContacts) setChatList(retriveContacts)
  },[])

  useEffect(() => {
    localStorage.setItem(Local_Storage_key, JSON.stringify(chatList))
  },[chatList])

  const contextValue = {
    chatList,
    addChat,
  }

  return (
    <ChatContext.Provider value={contextValue}>{children}</ChatContext.Provider>
  );
};

export const useChatContext = () => useContext(ChatContext);

export default ChatProvider;