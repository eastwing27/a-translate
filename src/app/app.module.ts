import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { YandexTranslateService } from './services/yt.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TextAreaComponent } from './components/textarea/textarea.component';
import { DropdownComponent } from './components/ddown/ddown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextAreaComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [YandexTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
