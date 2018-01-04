import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GlobalService} from "./services/global.service";
import {CommonModule} from "@angular/common";
import {ComponentsModule} from "./components/components.module";
import {CoreModule} from "./core/core.module";
import {DirectivesModule} from "./directives/directives.module";
import {PipesModule} from "./pipes/pipes.module";
import {AppRouter} from "./app.routes";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        CoreModule,
        DirectivesModule,
        PipesModule,
        BrowserModule.withServerTransition({appId: 'my-app'}),
        AppRouter
    ],
    providers: [
        GlobalService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
