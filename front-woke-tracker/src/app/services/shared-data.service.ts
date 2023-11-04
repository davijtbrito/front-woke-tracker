import { Injectable } from '@angular/core';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { SearchDetail } from '../reference/models/search-detail.model';

@Injectable({
    providedIn: 'root',
})
export class SharedDataService {
    
    newsRelatedEntity!: GenericEntityDto;
    newsRelatedConnection!: GenericEntityDto;
    searchDetail!: SearchDetail;
}
