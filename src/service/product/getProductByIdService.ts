import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { ProductEntity } from "../../entity/product/productEntity";
import { TGetProductByIdPayload } from "../../types/product/TGetProductByID";

export class GetProductByIdService {
  async getProductById(
    payload: TGetProductByIdPayload
  ): Promise<ProductEntity> {
    try {
      const response = await axios.get(
        API_PATH.PRODUCT.GET_PRODUCT_BY_ID + `/${payload.id}`,
      );
      console.log(response)

      if (!response.data) {
        throw new Error("No data received");
      }

      return response.data as ProductEntity;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  }
}
