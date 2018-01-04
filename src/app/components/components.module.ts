import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PipesModule} from "../pipes/pipes.module";
import {DirectivesModule} from "../directives/directives.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    DirectivesModule,
  ],
  declarations: [

  ],
  exports: [

  ],
})
export class ComponentsModule { }
