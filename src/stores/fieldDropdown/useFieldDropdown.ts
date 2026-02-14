import { create } from "zustand";

const useProductFieldStore = create<{
  fullField: boolean;
  setFullField: (fullField: boolean) => void;
}>((set, get) => ({
  fullField: true,
  setFullField: (payload) => {
    set({ fullField: payload });
  },
}));

export default useProductFieldStore;
