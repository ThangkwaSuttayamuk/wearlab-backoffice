import { ProductEntity } from "../../entity/product/productEntity";

export type TGetProductWithFilterPayload = {
  status: string;
  type: string;
  limit: number;
  offset: number;
  name: string;
};

export type TGetProductWithFilterResponse = {
  products: ProductEntity[];
  total: number;
};
