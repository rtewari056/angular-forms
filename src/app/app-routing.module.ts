import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    children: [
      {
        path: 'template-driven-form',
        loadComponent: () => import('./components/template-driven-form/template-driven-form.component').then(m => m.TemplateDrivenFormComponent)
      },
      {
        path: 'reactive-form',
        loadComponent: () => import('./components/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];