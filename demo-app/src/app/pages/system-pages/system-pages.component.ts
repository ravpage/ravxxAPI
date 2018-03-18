import {Component, OnInit} from '@angular/core';
import {RavxxApiService} from "../../services/ravxx-api.service";

@Component({
    selector: 'app-system-pages',
    templateUrl: './system-pages.component.html',
    styleUrls: ['./system-pages.component.scss']
})
export class SystemPagesComponent implements OnInit {

    constructor(public ravxxApiService: RavxxApiService) {
    }

    ngOnInit() {
    }

}
