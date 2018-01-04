import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Router, NavigationEnd} from "@angular/router";
import {GlobalService} from "./services/global.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent implements OnInit {

    constructor(private _GlobalService: GlobalService,
                private _router: Router) {
    }

    ngOnInit() {
        if (this._GlobalService.IsBrowser()) {
            this._router.events.subscribe((event) => {
                if (!(event instanceof NavigationEnd)) {
                    return;
                }
                window.scrollTo(0, 0);
            })
        }
    }
}
