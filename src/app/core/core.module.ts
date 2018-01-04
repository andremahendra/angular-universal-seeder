import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ComponentsModule} from "../components/components.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
  ],
  declarations: [
      HeaderComponent,
    FooterComponent
  ],
  exports: [
      HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
