import { create } from "zustand";

const useLoadingStore = create<{
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

export default useLoadingStore;
