import { create } from "zustand";

const useProductFormStore = create<{
  productId: number;
  productName: string;
  productDescription: string;
  productDefect: string;
  productType: string;
  productWaist: number;
  productLength: number;
  productChest: number;
  productOwner: number;
  productStatus: string;
  productPrice: number;
  productSalePrice: number;
  productImage: string[];
  productOwnerName: string;
  setProductId: (productId: number) => void;
  setProductName: (productName: string) => void;
  setProductDescription: (productDescription: string) => void;
  setProductDefect: (productDefect: string) => void;
  setProductType: (productType: string) => void;
  setProductWaist: (productWaist: number) => void;
  setProductLength: (productLength: number) => void;
  setProductChest: (productChest: number) => void;
  setProductOwner: (productOwner: number) => void;
  setProductStatus: (productStatus: string) => void;
  setProductPrice: (productPrice: number) => void;
  setProductSalePrice: (productSalePrice: number) => void;
  setProductImage: (productImage: string[]) => void;
  setProductOwnerName: (productOwnerName: string) => void;
  setProductInit: () => void;
}>((set, get) => ({
  productId: 0,
  productName: "",
  productDescription: "",
  productDefect: "",
  productType: "",
  productWaist: 0,
  productLength: 0,
  productChest: 0,
  productOwner: 0,
  productStatus: "",
  productPrice: 0,
  productSalePrice: 0,
  productImage: [],
  productOwnerName: "",
  setProductId: (payload) => {
    set({ productId: payload });
  },
  setProductName: (payload) => {
    set({ productName: payload });
  },
  setProductDescription: (payload) => {
    set({ productDescription: payload });
  },
  setProductDefect: (payload) => {
    set({ productDefect: payload });
  },
  setProductType: (payload) => {
    set({ productType: payload });
  },
  setProductWaist: (payload) => {
    set({ productWaist: payload });
  },
  setProductLength: (payload) => {
    set({ productLength: payload });
  },
  setProductChest: (payload) => {
    set({ productChest: payload });
  },
  setProductOwner: (payload) => {
    set({ productOwner: payload });
  },
  setProductStatus: (payload) => {
    set({ productStatus: payload });
  },
  setProductPrice: (payload) => {
    set({ productPrice: payload });
  },
  setProductSalePrice: (payload) => {
    set({ productSalePrice: payload });
  },
  setProductImage: (payload) => {
    set({ productImage: payload });
  },
  setProductOwnerName: (payload) => {
    set({ productOwnerName: payload });
  },
  setProductInit: () => {
    set({
      productId: 0,
      productName: "",
      productDescription: "",
      productDefect: "",
      productType: "",
      productWaist: 0,
      productLength: 0,
      productChest: 0,
      productOwner: 0,
      productStatus: "",
      productPrice: 0,
      productSalePrice: 0,
      productImage: [],
      productOwnerName: "",
    });
  },
}));

export default useProductFormStore;
