import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoShellComponent } from './company-info-shell.component';

describe('CompanyInfoShellComponent', () => {
  let component: CompanyInfoShellComponent;
  let fixture: ComponentFixture<CompanyInfoShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyInfoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
