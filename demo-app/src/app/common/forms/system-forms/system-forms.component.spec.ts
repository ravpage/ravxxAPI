import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemFormsComponent } from './system-forms.component';

describe('SystemFormsComponent', () => {
  let component: SystemFormsComponent;
  let fixture: ComponentFixture<SystemFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
