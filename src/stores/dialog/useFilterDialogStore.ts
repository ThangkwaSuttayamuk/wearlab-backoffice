import { create } from "zustand";

const useFilterDialogStore = create<{
  selectType: string;
  applyType: string;
  setSelectType: (selectType: string) => void;
  setApplyType: (applyType: string) => void;
  setSelectInit: () => void;
  setApplyInit: () => void;
}>((set) => ({
  selectType: "",
  applyType: "",
  setSelectType: (payload) => {
    set({ selectType: payload });
  },
  setApplyType: (payload) => {
    set({ applyType: payload });
  },
  setSelectInit: () => {
    set({ selectType: "" });
  },
  setApplyInit: () => {
    set({ applyType: "" });
  },
}));

export default useFilterDialogStore;
