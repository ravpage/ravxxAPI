import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-app-menu-body',
    templateUrl: './app-menu-body.component.html',
    styleUrls: ['./app-menu-body.component.scss']
})
export class AppMenuBodyComponent implements OnInit {
    @Input() menuState: string = "";

    constructor(private route: ActivatedRoute) {
        var self = this;
        this.route.data.subscribe(function (params) {
            self.menuState = params["menuState"];
        });
    }

    ngOnInit() {
    }

}
