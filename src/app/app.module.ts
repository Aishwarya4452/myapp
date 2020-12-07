import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PtabComponent } from './product/ptab.component';
import { FormsModule } from '@angular/forms';
import { PformComponent } from './product/pform.component';
import { PlistComponent } from './product/plist.component';

@NgModule({
  declarations: [
    AppComponent,PtabComponent,PformComponent,PlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
