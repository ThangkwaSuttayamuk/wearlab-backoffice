import { create } from "zustand";
import { ProductEntity } from "../../entity/product/productEntity";
import { GetAllProductService } from "../../service/product/getAllProductService";
import { GetProductWithFilterService } from "../../service/product/getProductWithFilterService";
import useLoadingStore from "../loading/useLoadingStore";

const useProductStore = create<{
  allProduct: ProductEntity[];
  total: number;
  totalValue: number;
  setAllProduct: (allProduct: any) => void;
  getAllProduct: () => void;
  getProductWithFilter: (
    category: string,
    keyword: string
  ) => void;
}>((set) => ({
  allProduct: [],
  total: 0,
  totalValue: 0,
  setAllProduct: (payload) => {
    set({ allProduct: payload });
  },
  getAllProduct: async () => {
    const { setIsLoading } = useLoadingStore.getState();
    const service = new GetAllProductService();
    try {
      setIsLoading(true);
      const result = await service.getAllProduct({});

      set((state) => ({
        ...state,
        allProduct: result.products,
        total: result.total,
        totalValue: result.totalValue || 0,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  },
  getProductWithFilter: async (category, keyword) => {
    const { setIsLoading } = useLoadingStore.getState();
    const service = new GetProductWithFilterService();
    try {
      setIsLoading(true);
      const result = await service.getProductWithFilter({
        category: category==="All" ? "" : category,
        keyword: keyword,
      });

      set((state) => ({
        ...state,
        allProduct: result.products,
        total: result.total,
        totalValue: result.totalValue || 0,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  },
}));

export default useProductStore;
