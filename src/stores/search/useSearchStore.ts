import { create } from "zustand";

const useNavbarStore = create<{
  input: string;
  setInput: (input: string) => void;
  getInput: () => void;
}>((set, get) => ({
  input: "",
  setInput: (payload) => {
    set({ input: payload });
    return get().input;
  },
  getInput: () => {
    return get().input;
  },
}));

export default useNavbarStore;
