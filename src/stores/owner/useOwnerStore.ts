import { create } from "zustand";
import { OwnerEntity } from "../../entity/owner/ownerEntity";
import { GetAllOwnerService } from "../../service/owner/getAllOwnerService";

const useOwnerStore = create<{
  allOwner: OwnerEntity[];
  getAllOwner: () => void;
}>((set, get) => ({
  input: "",
  allOwner: [],
  getAllOwner: async () => {
    const service = new GetAllOwnerService();
    
    try {
      const result = await service.getAllOwner();
      set((state) => ({
        ...state,
        allOwner: result,
       
      }));
    } catch (err) {
      console.error(err);
    }
  },
}));

export default useOwnerStore;
