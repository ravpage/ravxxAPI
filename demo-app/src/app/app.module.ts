import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { RavxxApiRootComponent } from './ravxx-api-root/ravxx-api-root.component';
import {RavxxApiService} from "./services/ravxx-api.service";
import { SystemPagesComponent } from './pages/system-pages/system-pages.component';
import { SystemEntityComponent } from './common/system-entity/system-entity.component';
import { AppMenuBodyComponent } from './app-menu-body.component';
import { PagesComponent } from './pages/pages.component';
import { EditorComponent } from './editor/editor.component';
import { UserPagesComponent } from "./pages/user-pages/user-pages.component";
import { UserEntityComponent} from "./common/user-entity/user-entity.component";

const appRoutes: Routes = [
    /*
    { path: 'crisis-center', component: CrisisListComponent },
    { path: 'hero/:id',      component: HeroDetailComponent },
    {
        path: 'heroes',
        component: HeroListComponent,
        data: { title: 'Heroes List' }
    },
    */
    { path: 'pages',
        redirectTo: '/pages/templates',
        pathMatch: 'full'
    },
    {
        path: 'pages/:type',
        component: AppMenuBodyComponent,
        data: {menuState:"pages"},
        children: [
            {path: ':id/:action', component: EditorComponent, data: {"class":"pages"} },
        ]
        },
    { path: 'pages/:type/:id/:action', component: AppMenuBodyComponent, data: {menuState:"pages"} },
    { path: 'forms', component: AppMenuBodyComponent, data: {menuState:"forms"} },
    { path: 'mail_templates', component: AppMenuBodyComponent, data: {menuState:"mail_templates"} },
    { path: 'general', component: AppMenuBodyComponent, data: {menuState:"general"} },
    { path: '', component: AppMenuBodyComponent, data: {menuState:"general"} },
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
    UserEntityComponent
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
export class AppModule { }
