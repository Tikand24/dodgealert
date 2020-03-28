
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatRadioModule, MatCardModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { Form1Component } from './form1/form1.component';
import { FormdosComponent } from './formdos/formdos.component';
import { InicioComponent } from './inicio/inicio.component';
import { SingleinvocadorComponent } from './singleinvocador/singleinvocador.component';
import { CalifyinvocadorComponent } from './califyinvocador/califyinvocador.component';

import { DataApiService } from 'src/app/services/data-api.service';
import { MultiinvocadorComponent } from './multiinvocador/multiinvocador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Form1Component,
    FormdosComponent,
    InicioComponent,
    SingleinvocadorComponent,
    CalifyinvocadorComponent,
    MultiinvocadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,    
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
