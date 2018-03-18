import {Component, Input, OnInit} from '@angular/core';
import {RavxxApiService} from "../../services/ravxx-api.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-system-entities',
    templateUrl: './system-entities.component.html',
    styleUrls: ['./system-entities.component.scss']
})
export class SystemEntitiesComponent implements OnInit {
    @Input() type:String;

    getEntities():BehaviorSubject<any>
    {
        switch (this.type)
        {
            case "page":
                return this.ravxxApiService.systemPages;
            case "form":
                return this.ravxxApiService.systemForms;
        }
    }

    constructor(public ravxxApiService: RavxxApiService) {
    }

    ngOnInit() {
    }

}
