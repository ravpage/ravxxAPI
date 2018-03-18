import {Component, Input, OnInit} from '@angular/core';
import {RavxxApiService} from "../../services/ravxx-api.service";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Component({
    selector: 'app-user-entities',
    templateUrl: './user-entities.component.html',
    styleUrls: ['./user-entities.component.scss']
})
export class UserEntitiesComponent implements OnInit {
    @Input() type:String;

    getEntities():BehaviorSubject<any>
    {
        switch (this.type)
        {
            case "page":
                return this.ravxxApiService.userPages;
            case "form":
                return this.ravxxApiService.userForms;
        }
    }

    constructor(public ravxxApiService: RavxxApiService) {
    }

    ngOnInit() {
    }

}
