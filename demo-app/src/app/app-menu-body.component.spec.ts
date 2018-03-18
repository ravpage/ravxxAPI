import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuBodyComponent } from './app-menu-body.component';

describe('AppMenuBodyComponent', () => {
  let component: AppMenuBodyComponent;
  let fixture: ComponentFixture<AppMenuBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
