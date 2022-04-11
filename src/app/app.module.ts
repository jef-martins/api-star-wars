import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';
import { RouterModule, Routes } from '@angular/router';
import { CarregandoComponent } from './carregando/carregando.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "info", component: InfosComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InfosComponent,
    CarregandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
