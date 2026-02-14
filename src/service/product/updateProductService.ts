import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { TUpdateProductPayload } from "../../types/product/TUpdateProduct";

export class UpdateProductService {
  updateProduct = async (id: number, payload: TUpdateProductPayload) => {
    console.log(payload);
    try {
      const response = await axios.put(
        API_PATH.PRODUCT.UPDATE_PRODUCT + `/${id}`,
        payload
      );

      console.log(API_PATH.PRODUCT.UPDATE_PRODUCT + `/${id}`);

      console.log(payload);

      if (!response.data) {
        throw new Error("Error reate Product");
      }

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  };
}
