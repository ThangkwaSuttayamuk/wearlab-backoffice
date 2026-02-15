import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { ProductJson } from "../../dtos/product/productJson";
import { ProductModel } from "../../model/product/productModel";
import {
  TGetAllProductPayload,
  TGetAllProductResponse,
} from "../../types/product/TGetAllProduct";

export class GetAllProductService {
  async getAllProduct(
    payload: TGetAllProductPayload,
  ): Promise<TGetAllProductResponse> {
    try {
      const response = await axios.get(
        API_PATH.PRODUCT.GET_ALL_PRODUCT
      );

      const { products, total, totalValue } = response.data;

      if (!response.data) {
        throw new Error("No data received");
      }
      return {
        products: products.map((item: ProductJson) =>
          ProductModel.fromJson(item).toEntity(),
        ),
        total: total,
        totalValue: totalValue,
      };
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data || error;
      } else {
        throw new Error(`Unexpected error: ${(error as Error).message}`);
      }
    }
  }
}
