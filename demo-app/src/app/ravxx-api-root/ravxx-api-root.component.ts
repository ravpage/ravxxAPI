import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Inject} from "@angular/core";
import {ElementRef} from "@angular/core";
import {DOCUMENT} from "@angular/common";
import {RavxxApiService} from "../services/ravxx-api.service";

@Component({
    selector: 'app-ravxx-api-root',
    templateUrl: './ravxx-api-root.component.html',
    styleUrls: ['./ravxx-api-root.component.scss']
})
export class RavxxApiRootComponent implements OnInit, AfterViewInit {

    constructor(private elementRef: ElementRef, private ravxxApiService: RavxxApiService) {

    };

    ngAfterViewInit() {
        window["__ravxxApiService__"] = this.ravxxApiService;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://demo-api.ravpages.co.il/api?xsitesver=connector_js&func=connectorJS";
        this.elementRef.nativeElement.appendChild(s);
    }

    ngOnInit() {
    }

}

window["__ravxxApiService__"] = null;
window["ravxx_api_loaded"] = function () {
    window["__ravxxApiService__"].handleAPILoaded();
}