import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
    selection: string = "templates";

    constructor(private route: ActivatedRoute) {
        var self = this;
        this.route.params.subscribe(function (params) {
            self.selection = params["type"];
        });
    }

    ngOnInit() {
    }

}
