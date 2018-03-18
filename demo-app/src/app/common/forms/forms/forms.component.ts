import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
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
