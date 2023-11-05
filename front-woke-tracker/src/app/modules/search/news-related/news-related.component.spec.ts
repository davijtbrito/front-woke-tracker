import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRelatedComponent } from './news-related.component';

describe('NewsRelatedComponent', () => {
  let component: NewsRelatedComponent;
  let fixture: ComponentFixture<NewsRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
