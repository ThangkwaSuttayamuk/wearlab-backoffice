import { StatusJson } from "../../dtos/status/statusJson";
import { StatusEntity } from "../../entity/status/statusEntity";

export class StatusModel extends StatusEntity {
  static fromJson(json: StatusJson): StatusModel {
    return new StatusModel(json?.id, json?.name);
  }

  toEntity(): StatusEntity {
    return new StatusEntity(this.id, this.name);
  }
}
