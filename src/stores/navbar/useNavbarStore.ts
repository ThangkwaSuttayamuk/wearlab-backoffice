import { create } from 'zustand';

const useNavbarStore = create<{
  isShowNavbar: boolean;
  activeButton: number;
  setActiveButton: (activeButton: number) => void;
  setIsShowNavbar: () => void;
}>((set, get) => ({
  isShowNavbar: false,
  activeButton: 1,
  setActiveButton: payload => {
    set({ activeButton: payload });
  },
  setIsShowNavbar: () => {
    set({isShowNavbar: !get().isShowNavbar});
  }
}));

export default useNavbarStore;
