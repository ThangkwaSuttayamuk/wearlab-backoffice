import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { ProductJson } from "../../dtos/product/productJson";
import { ProductModel } from "../../model/product/productModel";
import {
  TGetProductWithFilterPayload,
  TGetProductWithFilterResponse,
} from "../../types/product/TGetProductWithFilter";

export class GetProductWithFilterService {
  async getProductWithFilter(
    payload: TGetProductWithFilterPayload
  ): Promise<TGetProductWithFilterResponse> {
    try {
      const response = await axios.get(
        API_PATH.PRODUCT.GET_PRODUCT_WITH_FILTER +
          `limit=${payload.limit}&offset=${payload.offset}&status=${payload.status}&type=${payload.type}&name=${payload.name}`
      );
      console.log(
        API_PATH.PRODUCT.GET_PRODUCT_WITH_FILTER +
          `limit=${payload.limit}&offset=${payload.offset}&status=${payload.status}&type=${payload.type}&name=${payload.name}`
      );

      const { products, total } = response.data;
      console.log(products, total);
      if (!response.data) {
        throw new Error("No data received");
      }
      return {
        products:
          products == null
            ? []
            : products.map((item: ProductJson) =>
                ProductModel.fromJson(item).toEntity()
              ),
        total: total,
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
