import { create } from "zustand";

const useFilterDialogStore = create<{
  selectType: string;
  selectStatus: string;
  applyType: string;
  applyStatus: string;
  setSelectType: (selectType: string) => void;
  setSelectStatus: (selectStatus: string) => void;
  setApplyType: (applyType: string) => void;
  setApplyStatus: (applyStatus: string) => void;
  setSelectInit: () => void;
  setApplyInit: () => void;
}>((set) => ({
  selectType: "",
  selectStatus: "",
  applyType: "",
  applyStatus: "",
  setSelectType: (payload) => {
    set({ selectType: payload });
  },
  setSelectStatus: (payload) => {
    set({ selectStatus: payload });
  },
  setApplyType: (payload) => {
    set({ applyType: payload });
  },
  setApplyStatus: (payload) => {
    set({ applyStatus: payload });
  },
  setSelectInit: () => {
    set({ selectStatus: "", selectType: "" });
  },
  setApplyInit: () => {
    set({ applyStatus: "", applyType: "" });
  },
}));

export default useFilterDialogStore;
