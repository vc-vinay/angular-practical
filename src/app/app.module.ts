import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlusOperatorComponent } from './plus-operator/plus-operator.component';
import { MinusOperatorComponent } from './minus-operator/minus-operator.component';
import { MultiplyOperatorComponent } from './multiply-operator/multiply-operator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlusOperatorComponent,
    MinusOperatorComponent,
    MultiplyOperatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
