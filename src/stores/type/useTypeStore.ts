import { create } from "zustand";
import { TypeEntity } from "../../entity/type/typeEntity";
import { GetAllTypeService } from "../../service/type/getAllTypeService";

const useTypeStore = create<{
  allType: TypeEntity[];
  getAllType: () => void;
}>((set) => ({
  allType: [],
  getAllType: async () => {
    const service = new GetAllTypeService();
    try {
      const result = await service.getAllType();
      set((state) => ({
        allType: result,
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useTypeStore;
