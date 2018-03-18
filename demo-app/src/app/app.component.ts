import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    menuState = "general";

    setMenuState(newState) {
        this.menuState = newState;
    }
}
