import { ProductJson } from "../../dtos/product/productJson";
import { ProductEntity } from "../../entity/product/productEntity";

export class ProductModel extends ProductEntity {
  static fromJson(json: ProductJson): ProductModel {
    return new ProductModel(
      json?.id,
      json?.name,
      json?.description,
      json?.defect,
      json?.type,
      json?.waist,
      json?.length,
      json?.chest,
      json?.owner,
      json?.status,
      json?.price,
      json?.saleprice,
      json?.image,
      json?.createdate,
      json?.updatedate,
      json?.ownername
    );
  }

  toEntity(): ProductEntity {
    return new ProductEntity(
      this.id,
      this.name,
      this.description,
      this.defect,
      this.type,
      this.waist,
      this.length,
      this.chest,
      this.owner,
      this.status,
      this.price,
      this.saleprice,
      this.image,
      this.createdate,
      this.updatedate,
      this.ownername
    );
  }
}
