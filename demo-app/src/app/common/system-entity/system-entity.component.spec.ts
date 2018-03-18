import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SystemEntityComponent} from './system-entity.component';

describe('UserEntityComponent', () => {
    let component: SystemEntityComponent;
    let fixture: ComponentFixture<SystemEntityComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SystemEntityComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SystemEntityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
