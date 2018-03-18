import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RavxxApiService} from "../services/ravxx-api.service";
import {ISubscription} from "rxjs/Subscription";

@Component({
    selector: 'app-preview',
    templateUrl: './preview.component.html',
    styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnDestroy {
    @ViewChild('previewContainer') previewContainer: ElementRef;
    id: Number = null;
    type: String = null;
    ready: boolean = false;

    previewInstance = null;

    private subscriptions: Array<ISubscription> = [];

    private process() {
        var self = this;
        if (self.type && self.id && self.ready && self.previewContainer && self.previewContainer.nativeElement) {
            if (self.previewInstance)
                self.ravxxApiService.destoryPreviewWidget(self.previewInstance);
            self.previewInstance = self.ravxxApiService.createPreviewWidget(
                "pages",
                self.type,
                self.id,
                self.previewContainer
            );
        }
    }

    constructor(private route: ActivatedRoute, private ravxxApiService: RavxxApiService, private _location: Location) {
        var self = this;

        this.subscriptions.push(ravxxApiService.ready.subscribe(function (state) {
                if (state)
                    self.ready = true;
                self.process();
            }
        ));

        this.subscriptions.push(this.route.params.subscribe(function (params) {
            self.id = params["id"];

            self.process();
        }));

        this.subscriptions.push(this.route.parent.params.subscribe(function (params) {
            self.type = params["type"];

            self.process();
        }));
    }

    ngAfterViewInit() {
        this.process();
    }

    ngOnDestroy() {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
        if (this.previewInstance)
            this.ravxxApiService.destoryPreviewWidget(this.previewInstance);
        this.previewInstance = null;
    }
}
