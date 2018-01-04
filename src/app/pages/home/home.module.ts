import {NgModule} from "@angular/core";
import {homeRouter} from "./home.router";
import {HomeComponent} from "./home.component";
import {DirectivesModule} from "../../directives/directives.module";
import {PipesModule} from "../../pipes/pipes.module";
import {ComponentsModule} from "../../components/components.module";
import {CommonModule} from "@angular/common";
@NgModule({
    declarations: [HomeComponent],
    imports: [homeRouter, CommonModule, ComponentsModule, PipesModule, DirectivesModule],
})

export class HomeModule {}