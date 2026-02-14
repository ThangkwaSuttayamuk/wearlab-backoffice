import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { TDeleteProductPayload } from "../../types/product/TDeleteProduct";

export class DeleteProductService {
  deleteProduct = async (payload: TDeleteProductPayload) => {
    try {
      const response = await axios.delete(
        API_PATH.PRODUCT.DELETE_PRODUCT + `/${payload.id}`,
      );

      if (!response.data) {
        throw new Error("Error Delete Product");
      }

      return response;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  };
}
