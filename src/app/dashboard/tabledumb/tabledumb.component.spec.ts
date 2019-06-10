import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledumbComponent } from './tabledumb.component';

describe('TabledumbComponent', () => {
  let component: TabledumbComponent;
  let fixture: ComponentFixture<TabledumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
