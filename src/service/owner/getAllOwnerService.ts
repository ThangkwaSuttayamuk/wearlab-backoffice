import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { OwnerEntity } from "../../entity/owner/ownerEntity";
import { OwnerJson } from "../../dtos/owner/ownerJson";
import { OwnerModel } from "../../model/owner/ownerModel";

export class GetAllOwnerService {
  async getAllOwner(): Promise<OwnerEntity[]> {
    try {
      const response = await axios.get(API_PATH.OWNER.GET_ALL_ONWER);

      if (!response.data) {
        throw new Error("No data received");
      }

      const allOwner = response.data.map((item: OwnerJson) =>
        OwnerModel.fromJson(item).toEntity()
      );
      return allOwner;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
}
