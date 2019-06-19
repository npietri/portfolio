import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceproComponent } from './experiencepro.component';

describe('ExperienceproComponent', () => {
  let component: ExperienceproComponent;
  let fixture: ComponentFixture<ExperienceproComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceproComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
