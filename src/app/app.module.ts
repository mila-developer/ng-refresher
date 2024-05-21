import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonsService } from './persons/persons.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-rounting.module';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule
  ],
  providers: [PersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
