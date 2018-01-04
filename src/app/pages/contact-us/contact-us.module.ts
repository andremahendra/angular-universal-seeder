import {NgModule} from "@angular/core";
import {contactUsRouter} from "./contact-us.router";
import {DirectivesModule} from "../../directives/directives.module";
import {PipesModule} from "../../pipes/pipes.module";
import {ComponentsModule} from "../../components/components.module";
import {CommonModule} from "@angular/common";
import {ContactUsComponent} from "./contact-us.component";
@NgModule({
    declarations: [ContactUsComponent],
    imports: [contactUsRouter, CommonModule, ComponentsModule, PipesModule, DirectivesModule],
})

export class ContactUsModule {}