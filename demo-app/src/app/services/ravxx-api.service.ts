import {ElementRef, Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {NgZone} from "@angular/core";
import {distinctUntilChanged} from 'rxjs/operators';

interface EditorCallbacks {
    exitEditorCallback?: Function,
    mati?: Function
}

interface EditorInstance {
    id;
}

interface PreviewInstance {
    id;
}

@Injectable()
export class RavxxApiService {
    private __loaded = new BehaviorSubject<boolean>(false);
    private __pageTemplates = new BehaviorSubject<Array<Object>>(null);
    private __userPages = new BehaviorSubject<Array<Object>>(null);

    private __loadSystemPages = new BehaviorSubject<boolean>(false);
    private __loadUserPages = new BehaviorSubject<boolean>(false);

    constructor(private ngZone: NgZone) {
    }

    handleAPILoaded(): void {
        var self = this;

        window["ravxx_api"].setRavXXAccessToken("demo").then(function () {
            self.ngZone.run(function () {
                self.__loaded.next(true)
            });
            self.__loadSystemPages.pipe(distinctUntilChanged()).subscribe(function (state) {
                if (state)
                    window["ravxx_api"].allocateSystemPageTemplatesView({
                        handleData: function (id, err, templates) {
                            self.ngZone.run(function () {
                                self.__pageTemplates.next(templates);
                            });
                        }
                    });
            });
            self.__loadUserPages.pipe(distinctUntilChanged()).subscribe(function (state) {
                if (state)
                    window["ravxx_api"].allocateUserPagesView({
                        handleData: function (id, err, tags, pages) {
                            self.ngZone.run(function () {
                                self.__userPages.next(pages);
                            });
                        }
                    });
            });
        });
    }

    destoryEditorWidget(instance: EditorInstance) {
        window["ravxx_api"].destroyEditorWidget(instance.id);
    }

    destoryPreviewWidget(instance: PreviewInstance) {
        window["ravxx_api"].destroyPreviewWidget(instance.id);
    }


    createEditorWidget(entityClass, entityType, entityId, action, target: ElementRef, editorCallbacks: EditorCallbacks): EditorInstance {
        var self = this;

        console.log("params", entityClass, entityType, entityId, action);
        switch (entityClass) {
            case "pages":
                if (entityType == "templates")
                    var func = window["ravxx_api"].allocateSystemPageTemplateEditorWidget;
                else
                    var func = window["ravxx_api"].allocateUserPageEditorWidget;
                break;
        }

        var __editorCallbacks: EditorCallbacks = {};
        if (editorCallbacks.exitEditorCallback)
            __editorCallbacks.exitEditorCallback = function () {
                self.ngZone.run(function () {
                    editorCallbacks.exitEditorCallback();
                });
            };

        return {
            id: func(entityId, {
                target: target.nativeElement,
                action: action,
                editorCallbacks: __editorCallbacks
            })
        };
    }

    createPreviewWidget(entityClass, entityType, entityId, target: ElementRef): PreviewInstance {
        var self = this;

        console.log("params", entityClass, entityType, entityId);
        switch (entityClass) {
            case "pages":
                if (entityType == "templates")
                    var func = window["ravxx_api"].allocateSystemPagePreviewWidget;
                else
                    var func = window["ravxx_api"].allocateUserPagePreviewWidget;
                break;
        }

        return {
            id: func(entityId, {
                target: target.nativeElement
            })
        };
    }


    changeUserPageName(pageId: Number, newName: String): Promise<void> {
        var self = this;
        return new Promise<void>((resolve, reject) => {
            window["ravxx_api"].changeUserPageName(pageId, newName).then(
                () => self.ngZone.run(function () {
                    resolve();
                })
            ).catch(
                () => self.ngZone.run(function () {
                    reject();
                })
            );
        });
    }

    get ready(): Observable<boolean> {
        return this.__loaded;
    }

    get systemPages() {
        this.__loadSystemPages.next(true);
        return this.__pageTemplates;
    }

    get userPages() {
        this.__loadUserPages.next(true);
        return this.__userPages;
    }
}
