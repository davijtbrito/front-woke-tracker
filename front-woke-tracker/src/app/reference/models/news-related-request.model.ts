import { GenericEntityDto } from "./generic-entity-dto.model";

export interface NewsRelatedRequest {
    entity: GenericEntityDto;
    connection: GenericEntityDto;
}