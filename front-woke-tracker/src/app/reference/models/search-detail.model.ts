import { SearchCategory } from "../enums/search-category.enum";
import { GenericEntityDto } from "./generic-entity-dto.model";

export interface SearchDetail{
    detail: any;
    category: SearchCategory;
    values: string;
    connections: GenericEntityDto[];
}