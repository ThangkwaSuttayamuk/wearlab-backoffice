import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { TSellProductPayload } from "../../types/product/TSellProduct";

export class SellProductService {

  sellProduct = async (payload: TSellProductPayload) => {
    try {
      const response = await axios.post(
        API_PATH.PRODUCT.SELL_PRODUCT,
        payload,
      );

      if (!response.data) {
        throw new Error("Error selling Product");
      }

      return response;
    } catch (error: unknown) {
      console.error("Sell Product API Error:", error);
      if (axios.isAxiosError(error)) {
        throw error.response?.data;
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  };
}
