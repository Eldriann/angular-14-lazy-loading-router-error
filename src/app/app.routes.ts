import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lazy-loaded',
        loadChildren: () =>
          import('./pages/lazy-loaded/lazy-loaded.module').then(
            (m) => m.LazyLoadedModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        component: HomeComponent,
      },
    ],
  },
];
