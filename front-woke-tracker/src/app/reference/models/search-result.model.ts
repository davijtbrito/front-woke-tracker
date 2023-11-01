import { SearchCategory } from "../enums/search-category.enum";

export interface SearchResult{
    id: number;
    name: string;
    category: SearchCategory;
}