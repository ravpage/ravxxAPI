import {Component, OnInit} from '@angular/core';
import {RavxxApiService} from "../../services/ravxx-api.service";

@Component({
    selector: 'app-user-pages',
    templateUrl: './user-pages.component.html',
    styleUrls: ['./user-pages.component.scss']
})
export class UserPagesComponent implements OnInit {

    constructor(public ravxxApiService: RavxxApiService) {
    }

    ngOnInit() {
    }

}
