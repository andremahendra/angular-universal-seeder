import {Routes, RouterModule} from "@angular/router";
import {AboutUsComponent} from "./about-us.component";

const ABOUT_US_ROUTER: Routes = [
    {
        path: '',
        component: AboutUsComponent
    }
];

export const aboutUsRouter = RouterModule.forChild(ABOUT_US_ROUTER);