import {Routes, RouterModule} from "@angular/router";
import {ContactUsComponent} from "./contact-us.component";

const CONTACT_US_ROUTER: Routes = [
    {
        path: '',
        component: ContactUsComponent
    }
];

export const contactUsRouter = RouterModule.forChild(CONTACT_US_ROUTER);