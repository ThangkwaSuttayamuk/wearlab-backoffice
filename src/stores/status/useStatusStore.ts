import { create } from "zustand";
import { StatusEntity } from "../../entity/status/statusEntity";
import { GetAllStatusService } from "../../service/status/getAllStatusService";

const useStatusStore = create<{
  allStatus: StatusEntity[];
  getAllStatus: () => void;
}>((set) => ({
  allStatus: [],
  getAllStatus: async () => {
    const service = new GetAllStatusService();
    try {
      const result = await service.getAllStatus();
      set((state) => ({
        allStatus: result,
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useStatusStore;
