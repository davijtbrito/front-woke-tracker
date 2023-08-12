import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummieComponent } from './dummie.component';

describe('DummieComponent', () => {
  let component: DummieComponent;
  let fixture: ComponentFixture<DummieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
