import { create } from "zustand";

const useProductFormStore = create<{
  productId: number;
  productName: string;
  smeCode: string;
  productType: string;
  productPrice: number;
  stock: number;
  setProductId: (productId: number) => void;
  setProductName: (productName: string) => void;
  setSmeCode: (smeCode: string) => void;
  setProductType: (productType: string) => void;
  setProductPrice: (productPrice: number) => void;
  setStock: (stock: number) => void;
  setProductInit: () => void;
}>((set, get) => ({
  productId: 0,
  productName: "",
  smeCode: "",
  productType: "",
  productPrice: 0,
  stock: 0,
  setProductId: (payload) => {
    set({ productId: payload });
  },
  setProductName: (payload) => {
    set({ productName: payload });
  },
  setSmeCode: (payload) => {
    set({ smeCode: payload });
  },
  setProductType: (payload) => {
    set({ productType: payload });
  },
  setProductPrice: (payload) => {
    set({ productPrice: payload });
  },
  setStock: (payload) => {
    set({ stock: payload });
  },
  setProductInit: () => {
    set({
      productId: 0,
      productName: "",
      smeCode: "",
      productType: "",
      productPrice: 0,
      stock: 0,
    });
  },
}));

export default useProductFormStore;
