import { TypeJson } from "../../dtos/type/typeJson";
import { TypeEntity } from "../../entity/type/typeEntity";

export class TypeModel extends TypeEntity {
  static fromJson(json: TypeJson): TypeModel {
    return new TypeModel(json?.id, json?.name);
  }

  toEntity(): TypeEntity {
    return new TypeEntity(this.id, this.name);
  }
}
