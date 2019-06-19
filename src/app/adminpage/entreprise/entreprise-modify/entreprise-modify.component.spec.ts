import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseModifyComponent } from './entreprise-modify.component';

describe('EntrepriseModifyComponent', () => {
  let component: EntrepriseModifyComponent;
  let fixture: ComponentFixture<EntrepriseModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrepriseModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
