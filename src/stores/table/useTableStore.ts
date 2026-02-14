import { create } from "zustand";

const useTableStore = create<{
  page: number;
  allPage: number;
  startItem: number;
  endItem: number;
  allItem: number;
  setPage: (page: number) => void;
  setAllPage: (allPage: number) => void;
  setStartItem: (startItem: number) => void;
  setEndItem: (endItem: number) => void;
  setAllItem: (allItem: number) => void;
  setItemInit: () => void;
}>((set) => ({
  page: 1,
  allPage: 0,
  startItem: 0,
  endItem: 15,
  allItem: 0,
  setPage: (payload) => {
    set({ page: payload });
  },
  setAllPage: (payload) => {
    set({ allPage: payload });
  },
  setStartItem: (payload) => {
    set({ startItem: payload });
  },
  setEndItem: (payload) => {
    set({ endItem: payload });
  },
  setAllItem: (payload) => {
    set({ allItem: payload });
  },
  setItemInit: () => {
    set({ page: 1, allPage: 0, startItem: 0, endItem: 15, allItem: 0 });
  },
}));

export default useTableStore;
