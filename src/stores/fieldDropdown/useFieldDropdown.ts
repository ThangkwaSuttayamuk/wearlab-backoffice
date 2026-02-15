import { create } from "zustand";

const useProductFieldStore = create<{
  fullField: boolean;
  setFullField: (fullField: boolean) => void;
}>((set) => ({
  fullField: true,
  setFullField: (payload) => {
    set({ fullField: payload });
  },
}));

export default useProductFieldStore;
