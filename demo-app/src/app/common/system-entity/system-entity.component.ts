import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'app-system-entity',
    templateUrl: './system-entity.component.html',
    styleUrls: ['./system-entity.component.scss']
})
export class SystemEntityComponent implements OnInit {
    @Input() type:String;
    @Input() pageTemplate: Object;

    constructor() {
    }

    ngOnInit() {
    }

}
