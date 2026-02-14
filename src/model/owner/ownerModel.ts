import { OwnerJson } from "../../dtos/owner/ownerJson";
import { OwnerEntity } from "../../entity/owner/ownerEntity";

export class OwnerModel extends OwnerEntity {
  static fromJson(json: OwnerJson): OwnerModel {
    return new OwnerModel(json?.id, json?.name);
  }

  toEntity(): OwnerEntity {
    return new OwnerEntity(this.id, this.name);
  }
}
