import { ProductEntity } from "../../entity/product/productEntity";

export type TGetProductWithFilterPayload = {
  category: string;
  keyword: string;
};

export type TGetProductWithFilterResponse = {
  products: ProductEntity[];
  total: number;
  totalValue?: number;
};
