import {NgModule} from "@angular/core";
import {DirectivesModule} from "../../directives/directives.module";
import {PipesModule} from "../../pipes/pipes.module";
import {ComponentsModule} from "../../components/components.module";
import {CommonModule} from "@angular/common";
import {AboutUsComponent} from "./about-us.component";
import {aboutUsRouter} from "./about-us.router";
@NgModule({
    declarations: [AboutUsComponent],
    imports: [aboutUsRouter, CommonModule, ComponentsModule, PipesModule, DirectivesModule],
})

export class AboutUsModule {}