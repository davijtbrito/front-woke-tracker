import { Injectable } from '@angular/core';
import { SearchModule } from '../modules/search/search.module';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';

@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    
    newsRelatedEntity!: GenericEntityDto;
    newsRelatedConnection!: GenericEntityDto;
}
