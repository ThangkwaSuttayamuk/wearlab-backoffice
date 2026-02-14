import { ProductEntity } from "../../entity/product/productEntity";

export type TGetAllProductPayload = {
  limit: number;
  offset: number;
};

export type TGetAllProductResponse = {
  products: ProductEntity[];
  total: number;
};
