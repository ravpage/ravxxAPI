import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RavxxApiService} from "../services/ravxx-api.service";
import { OnDestroy } from "@angular/core";
import { ISubscription } from "rxjs/Subscription";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnDestroy  {
    @ViewChild('editorCotnainer') editorContainer: ElementRef;
    id: Number = null;
    action: String = null;
    type: String = null;
    ready: boolean = false;

    editorInstance = null;

    private subscriptions: Array<ISubscription> = [];

    private process() {
      var self = this;
      if ( self.type && self.action && self.id && self.ready && self.editorContainer && self.editorContainer.nativeElement ) {
          if ( self.editorInstance )
              self.ravxxApiService.destoryEditorWidget(self.editorInstance);
          self.editorInstance = self.ravxxApiService.createEditorWidget(
              "pages",
              self.type,
              self.id,
              self.action,
              self.editorContainer,
              {
                  exitEditorCallback: function () {
                      self._location.back();
                  }
              }
          );
      }
    }

    constructor(private route: ActivatedRoute, private ravxxApiService:RavxxApiService,private _location: Location) {
        var self = this;

        this.subscriptions.push(ravxxApiService.ready.subscribe(function(state)
            {
              if ( state )
                self.ready = true;
              self.process();
            }
        ));

        this.subscriptions.push(this.route.params.subscribe(function(params){
            self.id = params["id"];
            self.action = params["action"];

            self.process();
        } ));

        this.subscriptions.push(this.route.parent.params.subscribe(function(params){
            self.type = params["type"];

            self.process();
        } ));
    }

    ngAfterViewInit() {
      this.process();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        if ( this.editorInstance )
            this.ravxxApiService.destoryEditorWidget(this.editorInstance);
        this.editorInstance = null;
    }


}
