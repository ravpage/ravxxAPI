import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {RavxxApiService} from "../services/ravxx-api.service";
import {ISubscription} from "rxjs/Subscription";

@Component({
    selector: 'app-publish',
    templateUrl: './publish.component.html',
    styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnDestroy {
    @ViewChild('publishContainer') publishContainer: ElementRef;
    id: Number = null;
    type: String = null;
    ready: boolean = false;

    publishInstance = null;

    private subscriptions: Array<ISubscription> = [];

    private process() {
        var self = this;
        if (self.type && self.id && self.ready && self.publishContainer && self.publishContainer.nativeElement) {
            if (self.publishInstance)
                self.ravxxApiService.destoryPublishWidget(self.publishInstance);
            self.publishInstance = self.ravxxApiService.createPublishWidget(
                "pages",
                self.type,
                self.id,
                self.publishContainer
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
        if (this.publishInstance)
            this.ravxxApiService.destoryPublishWidget(this.publishInstance);
        this.publishInstance = null;
    }
}
