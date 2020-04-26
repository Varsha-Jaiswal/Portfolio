import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDataComponent } from './home-data.component';

describe('HomeDataComponent', () => {
  let component: HomeDataComponent;
  let fixture: ComponentFixture<HomeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
