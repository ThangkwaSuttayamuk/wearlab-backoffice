import axios from "axios";
import { API_PATH } from "../../constant/api/apiPath";
import { TCreateProductPayload } from "../../types/product/TCreateProduct";

export class CreateProductService {

  createProduct = async (payload: TCreateProductPayload) => {
          console.log(process.env.REACT_APP_TOKEN)

    try {
      const response = await axios.post(
        API_PATH.PRODUCT.CREATE_NEW_PRODUCT,
        payload,
        {
          headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` }
        }
      );
      console.log(process.env.REACT_APP_TOKEN)

      if (!response.data) {
        throw new Error("Error reate Product");
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
