import { ChangeDetectorRef, Component, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchDetail } from 'src/app/reference/models/search-detail.model';
import { WokeValuesPipe } from 'src/app/reference/pipes/woke-values.pipe';
import { SharedDataService } from '../../../services/shared-data.service';
import { GenericEntityDto } from 'src/app/reference/models/generic-entity-dto.model';
import { SearchCategory } from 'src/app/reference/enums/search-category.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-popup',
  templateUrl: './simple-popup.component.html',
  styleUrls: ['./simple-popup.component.scss'],
  providers: [WokeValuesPipe]  
})
export class SimplePopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: SearchDetail,
  private sharedData: SharedDataService,
  private router: Router) {    

    this.sharedData.newsRelatedEntity = {
      id: this.data.detail.id,
      name: this.data.detail.name,
      category: this.data.category
    };
  }

  onClickConnection(event: any){        
    this.sharedData.newsRelatedConnection = <GenericEntityDto>event;

    this.sharedData.newsRelatedEntity = {
      id: this.data.detail.id,
      name: this.data.detail.name,
      category: this.data.category
    };            

    this.router.navigate(["/news-related"]);
  }

}
