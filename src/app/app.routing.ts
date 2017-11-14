import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TranslateComponent } from './components/pages/translate.component';
import { AboutComponent } from './components/pages/about.component';

const appRoutes: Routes = [
    {
        path: '',
        component: TranslateComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);