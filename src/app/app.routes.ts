import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AboutComponent,
        title: 'Sebastian Fuss'
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent),
        title: 'Contact - Sebastian Fuss'
    },
    {
        path: 'imprint',
        loadComponent: () => import('./imprint/imprint.component').then(m => m.ImprintComponent),
        title: 'Imprint - Sebastian Fuss'
    },
    {
        path: 'privacy',
        loadComponent: () => import('./privacy/privacy.component').then(m => m.PrivacyComponent),
        title: 'Privacy - Sebastian Fuss'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'Page not found - Sebastian Fuss'
    }
];
