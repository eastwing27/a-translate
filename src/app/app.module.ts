import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { YandexTranslateService } from './services/yt.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/pages/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownComponent } from './components/ddown/ddown.component';
import { TranslateComponent} from './components/pages/translate.component';
import { TextAreaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    TextAreaComponent,
    DropdownComponent,
    TranslateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [YandexTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
