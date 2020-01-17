import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { 
  LoginModule, 
  LoginRoutingModule, 
  CadastroPjModule, 
  CadastroPjRoutingModule, 
  CadastroPfModule, 
  CadastroPfRoutingModule 
} from './autenticacao';

import { 
  FuncionarioModule,
  FuncionarioRoutingModule 
} from './funcionario';

import {
  AdminModule,
  AdminRoutingModule
} from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,
    AdminRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
