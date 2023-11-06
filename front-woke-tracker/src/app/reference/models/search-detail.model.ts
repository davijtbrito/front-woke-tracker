import { SearchCategory } from "../enums/search-category.enum";
import { WokeValues } from "../enums/woke-values.enum";
import { GenericEntityDto } from "./generic-entity-dto.model";

export interface SearchDetail{
    detail: any;
    category: SearchCategory;
    values: WokeValues[];
    connections: GenericEntityDto[];
}