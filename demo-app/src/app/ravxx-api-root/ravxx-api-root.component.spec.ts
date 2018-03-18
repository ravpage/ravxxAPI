import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavxxApiRootComponent } from './ravxx-api-root.component';

describe('RavxxApiRootComponent', () => {
  let component: RavxxApiRootComponent;
  let fixture: ComponentFixture<RavxxApiRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavxxApiRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavxxApiRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
