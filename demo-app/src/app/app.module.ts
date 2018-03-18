import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {RavxxApiRootComponent} from './ravxx-api-root/ravxx-api-root.component';
import {RavxxApiService} from "./services/ravxx-api.service";
import {SystemPagesComponent} from './pages/system-pages/system-pages.component';
import {SystemEntityComponent} from './common/system-entity/system-entity.component';
import {AppMenuBodyComponent} from './app-menu-body.component';
import {PagesComponent} from './pages/pages.component';
import {EditorComponent} from './editor/editor.component';
import {UserPagesComponent} from "./pages/user-pages/user-pages.component";
import {UserEntityComponent} from "./common/user-entity/user-entity.component";
import {PreviewComponent} from './preview/preview.component';
import { SystemEntitiesComponent}from "./common/system-entities/system-entities.component";
import {UserEntitiesComponent} from "./common/user-entities/user-entities.component";
import { SystemFormsComponent } from './common/forms/system-forms/system-forms.component';
import { UserFormsComponent } from './common/forms/user-forms/user-forms.component';
import { FormsComponent } from './common/forms/forms/forms.component';

const appRoutes: Routes = [
    {
        path: 'pages',
        redirectTo: '/pages/templates',
        pathMatch: 'full'
    },
    {
        path: 'pages/:type',
        component: AppMenuBodyComponent,
        data: {menuState: "pages"},
        children: [
            {path: ':id/preview', component: PreviewComponent, data: {"class": "pages"}},
            {path: ':id/:action', component: EditorComponent, data: {"class": "pages"}},
        ]
    },
    {path: 'pages/:type/:id/:action', component: AppMenuBodyComponent, data: {menuState: "pages"}},
    {
        path: 'forms',
        redirectTo: '/forms/templates',
        pathMatch: 'full'
    },
    {
        path: 'forms/:type',
        component: AppMenuBodyComponent,
        data: {menuState: "forms"},
        children: [
            {path: ':id/preview', component: PreviewComponent, data: {"class": "forms"}},
            {path: ':id/:action', component: EditorComponent, data: {"class": "forms"}},
        ]
    },
    {path: 'forms/:type/:id/:action', component: AppMenuBodyComponent, data: {menuState: "forms"}},
    {path: 'forms', component: AppMenuBodyComponent, data: {menuState: "forms"}},
    {path: 'mail_templates', component: AppMenuBodyComponent, data: {menuState: "mail_templates"}},
    {path: 'general', component: AppMenuBodyComponent, data: {menuState: "general"}},
    {path: '', component: AppMenuBodyComponent, data: {menuState: "general"}},
    //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        RavxxApiRootComponent,
        SystemPagesComponent,
        SystemEntityComponent,
        AppMenuBodyComponent,
        PagesComponent,
        EditorComponent,
        UserPagesComponent,
        UserEntityComponent,
        PreviewComponent,
        SystemEntitiesComponent,
        UserEntitiesComponent,
        SystemFormsComponent,
        UserFormsComponent,
        FormsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
        )
    ],
    providers: [RavxxApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
