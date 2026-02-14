import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { TypeEntity } from "../../entity/type/typeEntity";
import { TypeJson } from "../../dtos/type/typeJson";
import { TypeModel } from "../../model/type/typeModel";

export class GetAllTypeService {
  async getAllType(): Promise<TypeEntity[]> {
    try {
      const response = await axios.get(API_PATH.TYPE.GET_ALL_TYPE);

      if (!response.data) {
        throw new Error("No data received");
      }
      return response.data.map((item: TypeJson) =>
        TypeModel.fromJson(item).toEntity()
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
