import { create } from "zustand";

const usePopUpStore = create<{
  title: string;
  message: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setTitle: (title: string) => void;
  setMessage: (message: string) => void;
  setInitialState: () => void;
}>((set) => ({
  title: "",
  message: "",
  isOpen: false,
  setIsOpen: (payload) => {
    set({ isOpen: payload });
  },
  setTitle: (payload) => {
    set({ title: payload });
  },
  setMessage: (payload) => {
    set({ message: payload });
  },
  setInitialState: () => {
    set({
      title: "",
      message: "",
      isOpen: false,
    });
  },
}));

export default usePopUpStore;
