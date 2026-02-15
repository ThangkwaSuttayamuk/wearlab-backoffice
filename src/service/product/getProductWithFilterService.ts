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
      const params = new URLSearchParams();
      
      if (payload.category) {
        params.append('category', payload.category);
      }
      
      if (payload.keyword) {
        params.append('keyword', payload.keyword);
      }
      
      const queryString = params.toString();
      const url = queryString 
        ? `${API_PATH.PRODUCT.GET_PRODUCT_WITH_FILTER}${queryString}`
        : API_PATH.PRODUCT.GET_PRODUCT_WITH_FILTER.slice(0, -1);
      
      const response = await axios.get(url);

      const { products, total, totalValue } = response.data;

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
