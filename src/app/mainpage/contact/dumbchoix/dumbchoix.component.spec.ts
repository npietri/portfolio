import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbchoixComponent } from './dumbchoix.component';

describe('DumbchoixComponent', () => {
  let component: DumbchoixComponent;
  let fixture: ComponentFixture<DumbchoixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumbchoixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumbchoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
