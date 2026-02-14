import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { StatusModel } from "../../model/status/statusModel";
import { StatusJson } from "../../dtos/status/statusJson";
import { StatusEntity } from "../../entity/status/statusEntity";

export class GetAllStatusService {
  async getAllStatus(): Promise<StatusEntity[]> {
    try {
      const response = await axios.get(API_PATH.STATUS.GET_ALL_STATUS);

      if (!response.data) {
        throw new Error("No data received");
      }
      return response.data.map((item: StatusJson) =>
        StatusModel.fromJson(item).toEntity()
      );
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || error;
      } else {
        throw new Error(`Unexpected error: ${(error as Error).message}`);
      }
    }
  }
}
