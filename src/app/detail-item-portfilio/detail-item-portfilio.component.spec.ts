import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailItemPortfilioComponent } from './detail-item-portfilio.component';

describe('DetailItemPortfilioComponent', () => {
  let component: DetailItemPortfilioComponent;
  let fixture: ComponentFixture<DetailItemPortfilioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailItemPortfilioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailItemPortfilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
