import { ProductEntity } from "../../entity/product/productEntity";

export type TGetAllProductPayload = {};

export type TGetAllProductResponse = {
  products: ProductEntity[];
  total: number;
  totalValue?: number;
};
