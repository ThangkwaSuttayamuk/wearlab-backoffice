import { create } from "zustand";
import { ProductEntity } from "../../entity/product/productEntity";
import { GetAllProductService } from "../../service/product/getAllProductService";
import { GetProductWithFilterService } from "../../service/product/getProductWithFilterService";

const useProductStore = create<{
  allProduct: ProductEntity[];
  total: number;
  setAllProduct: (allProduct: any) => void;
  getAllProduct: (limit: number, offset: number) => void;
  getProductWithFilter: (
    limit: number,
    offset: number,
    status: string,
    type: string,
    name: string
  ) => void;
}>((set) => ({
  allProduct: [],
  total: 0,
  setAllProduct: (payload) => {
    set({ allProduct: payload });
  },
  getAllProduct: async (limit, offset) => {
    const service = new GetAllProductService();
    try {
      const result = await service.getAllProduct({
        limit: limit,
        offset: offset,
      });
      set((state) => ({
        ...state,
        allProduct: result.products,
        total: result.total,
      }));
    } catch (err) {
      console.error(err);
    }
  },
  getProductWithFilter: async (limit, offset, status, type, name) => {
    const service = new GetProductWithFilterService();
    try {
      const result = await service.getProductWithFilter({
        limit: limit,
        offset: offset,
        status: status,
        type: type,
        name: name,
      });

      set((state) => ({
        ...state,
        allProduct: result.products,
        total: result.total,
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useProductStore;
