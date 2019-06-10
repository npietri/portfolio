import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterdumbComponent } from './filterdumb.component';

describe('FilterdumbComponent', () => {
  let component: FilterdumbComponent;
  let fixture: ComponentFixture<FilterdumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterdumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterdumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
