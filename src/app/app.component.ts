import { Component, Output } from '@angular/core';
import { YandexTranslateService } from './services/yt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(private translator: YandexTranslateService){}

  @Output()
  translate(text){
    this.translator.translate(text).subscribe(res => console.log(res.text));
  }
}
