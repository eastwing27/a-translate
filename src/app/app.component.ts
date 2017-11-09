import { Component, Output } from '@angular/core';
import { YandexTranslateService } from './services/yt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  langs = [];

  constructor(private translator: YandexTranslateService){
    this.translator.getLanguages().subscribe(res => {
      this.langs = res.langs;
    });
  }

  @Output()
  translate(text: string){
    //console.log(text);
    let box = document.getElementById("output-box");
    //console.info(box.textContent, box.innerText);
    this.translator.getTranslation(text).subscribe(res => box.setAttribute('placeholder',res.text));
  }
}
