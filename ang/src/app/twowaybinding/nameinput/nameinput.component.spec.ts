import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameinputComponent } from './nameinput.component';

describe('NameinputComponent', () => {
  let component: NameinputComponent;
  let fixture: ComponentFixture<NameinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameinputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
