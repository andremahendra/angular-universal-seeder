import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";

const HOME_ROUTER: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];

export const homeRouter = RouterModule.forChild(HOME_ROUTER);