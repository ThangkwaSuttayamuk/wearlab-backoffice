import { create } from "zustand";

const useDialogStore = create<{
  typeDialog: string;
  setTypeDialog: (typeDialog: string) => void;
}>((set, get) => ({
  typeDialog: "",
  setTypeDialog: (payload) => {
    set({ typeDialog: payload });
  },
}));

export default useDialogStore;
