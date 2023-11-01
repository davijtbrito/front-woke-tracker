import { PipeTransform, Pipe } from "@angular/core";
import { SearchCategory } from "../enums/search-category.enum";

@Pipe({
    name: 'searchCategory'
  })
export class SearchCategoryPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {

        switch (value) {
            case SearchCategory.COMPANY:
                return "Company";
        
            case SearchCategory.INSTITUTION:
                return "Institution";

            case SearchCategory.PUBLIC_FIGURE:
                return "Public Figure";

            default:
                return "Invalid Value";
        }
    }
    
}