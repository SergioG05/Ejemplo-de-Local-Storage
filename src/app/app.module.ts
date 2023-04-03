import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes aquí

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent } // Agrega tus rutas aquí
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes) // Agrega RouterModule.forRoot(routes) aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
