import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
export const router: Routes = [
    //home
    { path: '', loadChildren: './pages/home/home.module#HomeModule' },

    //static
    { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsModule' },
    { path: 'contact-us', loadChildren: './pages/contact-us/contact-us.module#ContactUsModule' },

    //errors
    { path: '**', redirectTo: '' },

];

export const AppRouter: ModuleWithProviders = RouterModule.forRoot(router);