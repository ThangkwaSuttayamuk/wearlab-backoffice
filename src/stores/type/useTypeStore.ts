import { create } from "zustand";
import { TypeEntity } from "../../entity/type/typeEntity";
import { GetAllTypeService } from "../../service/type/getAllTypeService";

const useTypeStore = create<{
  allType: TypeEntity[];
  allTypeWithoutAll: TypeEntity[];
  getAllType: () => void;
}>((set) => ({
  allType: [new TypeEntity(0, "All")],
  allTypeWithoutAll: [],
  getAllType: async () => {
    const service = new GetAllTypeService();
    try {
      const result = await service.getAllType();
      set((state) => ({
        allType: [new TypeEntity(0, "All"), ...result],
        allTypeWithoutAll: result,
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useTypeStore;
