import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {RavxxApiService} from "../../services/ravxx-api.service";

@Component({
  selector: 'app-user-entity',
  templateUrl: './user-entity.component.html',
  styleUrls: ['./user-entity.component.scss']
})
export class UserEntityComponent implements OnInit {
  @Input() pageTemplate: Object;
  @HostBinding('class.changingName') changingName: boolean = false;

  constructor(private ravxxApiService:RavxxApiService) { }

  ngOnInit() {
  }

  updateName(newName:String):void
  {
    var self = this;
    this.changingName = true;
    this.ravxxApiService.changeUserPageName(this.pageTemplate["id"],newName).then(function() {
            self.changingName = false;
        }
    ).catch(
        function() {
            self.changingName = false;
        }
    );
  }

}
