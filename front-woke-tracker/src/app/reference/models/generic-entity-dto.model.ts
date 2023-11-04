import { SearchCategory } from "../enums/search-category.enum";

export interface GenericEntityDto {
    id: number;
    name: string;
    category: SearchCategory;
}