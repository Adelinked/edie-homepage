import { createContext, useRef } from "react";
import { createStore } from "zustand";

export const createChatStore = () =>
  createStore<{
    messages: string[];
    currentMessage: string;
    setCurrentMessage: (value: string) => void;
    addMessage: () => void;
  }>((set, get) => ({
    messages: [],
    currentMessage: "",
    setCurrentMessage: (value: string) => set({ currentMessage: value }),
    addMessage: () =>
      set({
        messages: get().currentMessage.length
          ? [...get().messages, get().currentMessage]
          : get().messages,
        currentMessage: "",
      }),
  }));

export const ChatContext = createContext<ReturnType<
  typeof createChatStore
> | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const store = useRef(createChatStore());

  return (
    <ChatContext.Provider value={store.current}>
      {children}
    </ChatContext.Provider>
  );
};
