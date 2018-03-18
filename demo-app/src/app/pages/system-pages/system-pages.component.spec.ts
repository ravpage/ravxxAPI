import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemPagesComponent } from './system-pages.component';

describe('UserPagesComponent', () => {
  let component: SystemPagesComponent;
  let fixture: ComponentFixture<SystemPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
