import { create } from "zustand";
import { GetProductByIdService } from "../../service/product/getProductByIdService";

const useSelectProductStore = create<{
  id: number;
  selectProductId: number;
  selectProductName: string;
  selectProductDescription: string;
  selectProductDefect: string;
  selectProductType: string;
  selectProductWaist: number;
  selectProductLength: number;
  selectProductChest: number;
  selectProductOwner: number;
  selectProductStatus: string;
  selectProductPrice: number;
  selectProductSalePrice: number;
  selectProductImage: string[];
  selectProductOwnerName: string;
  setId: (id: number) => void;
  setSelectProductInit: () => void;
  getProductById: (id: number) => {};
}>((set, get) => ({
  id: 0,
  selectProductId: 0,
  selectProductName: "",
  selectProductDescription: "",
  selectProductDefect: "",
  selectProductType: "",
  selectProductWaist: 0,
  selectProductLength: 0,
  selectProductChest: 0,
  selectProductOwner: 0,
  selectProductStatus: "",
  selectProductPrice: 0,
  selectProductSalePrice: 0,
  selectProductImage: [],
  selectProductOwnerName: "",
  setId: (payload: number) => {
    set({ id: payload });
  },
  setSelectProductInit: () => {
    set({
      selectProductId: 0,
      selectProductName: "",
      selectProductDescription: "",
      selectProductDefect: "",
      selectProductType: "",
      selectProductWaist: 0,
      selectProductLength: 0,
      selectProductChest: 0,
      selectProductOwner: 0,
      selectProductStatus: "",
      selectProductPrice: 0,
      selectProductSalePrice: 0,
      selectProductImage: [],
      selectProductOwnerName: "",
    });
  },
  getProductById: async (payload: number) => {
    const service = new GetProductByIdService();
    try {
      const result = await service.getProductById({ id: payload });
      set((state) => ({
        selectProductId: result.id,
        selectProductName: result.name,
        selectProductDescription: result.description,
        selectProductDefect: result.defect,
        selectProductType: result.type,
        selectProductWaist: result.waist,
        selectProductLength: result.length,
        selectProductChest: result.chest,
        selectProductOwner: result.owner,
        selectProductStatus: result.status,
        selectProductPrice: result.price,
        selectProductSalePrice: result.saleprice,
        selectProductImage: result.image,
        selectProductOwnerName: result.ownername,
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useSelectProductStore;
