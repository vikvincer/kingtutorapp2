import { Component,ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MathComponent } from './pages/math/math.component';
import { MathIndexComponent } from './pages/math/manthIndex/mathIndex.component';
import { AdditionComponent } from './pages/math/addition/addition.component';
import { SubtractionComponent } from './pages/math/subtraction/subtraction.component';

const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path:'math',
        component: MathComponent,
        children:[
            {
                path: '',
                component: MathIndexComponent
            },
            {
                path: 'addition',
                component: AdditionComponent
            },
            {
                path: 'subtraction',
                component: SubtractionComponent
            }
        ]
    }
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);