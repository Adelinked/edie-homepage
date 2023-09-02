import { useContext } from "react";
import { ChatContext, ChatProvider } from "./chatProvider";
import { useStore } from "zustand";

const useMessages = () =>
  useStore(useContext(ChatContext)!, (state) => state.messages);
const useCurrentMessage = () =>
  useStore(useContext(ChatContext)!, (state) => state.currentMessage);
const useMessageCount = () =>
  useStore(useContext(ChatContext)!, (state) => state.messages.length);
const useSetCurrentMessage = () =>
  useStore(useContext(ChatContext)!, (state) => state.setCurrentMessage);
const useAddMessage = () =>
  useStore(useContext(ChatContext)!, (state) => state.addMessage);

export const ChatContainer = () => {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
};

const Chat = () => {
  const messages = useMessages();
  const currentMessage = useCurrentMessage();
  const setCurrentMessage = useSetCurrentMessage();
  const addMessage = useAddMessage();
  const messagesCount = useMessageCount();
  return (
    <div className="bg-gray-700 p-4">
      <h1 className="text-xl font-bold text-white">Chat room</h1>
      <p className=" text-sm mb-4 text-white">
        Number of messages: {messagesCount}
      </p>
      <div className="h-40 overflow-y-auto flex flex-col items-start text-yellow-300 mb-4 bg-gray-800 p-2">
        {messages.map((m, index) => (
          <span key={index}>{m}</span>
        ))}
      </div>
      <input
        className="mr-4 rounded-md p-2"
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button
        onClick={addMessage}
        className=" bg-blue-500 text-white px-6 py-2 rounded-md"
      >
        Send
      </button>
    </div>
  );
};
