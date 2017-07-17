import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { routing } from './app.routing';
import { MathComponent } from './pages/math/math.component';
import { MathIndexComponent } from './pages/math/manthIndex/mathIndex.component';
import { AdditionComponent } from './pages/math/addition/addition.component';
import { SubtractionComponent } from './pages/math/subtraction/subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    MathComponent,
    MathIndexComponent,
    AdditionComponent,
    SubtractionComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
