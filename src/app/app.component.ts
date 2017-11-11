import { Component, Output, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { YandexTranslateService } from './services/yt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'app';
  langs : {key: string; value: string}[] = [];
  
  constructor(private translator: YandexTranslateService, private ref: ChangeDetectorRef){
    
  }

  private toArray(obj)
  {
    let result = [];
    for (var prop in obj)
    {
      result.push({key: prop, value: obj[prop]});
    }
    return result;
  }

  ngOnInit()
  {
    this.translator.getLanguages()
      .subscribe(res =>
      {
        this.langs = this.toArray(res.langs);
      });
      console.log(this.langs,this.toArray(this.langs));
  }

  @Output()
  translate(text: string){
    //console.log(text);
    let box = document.getElementById("output-box");
    //console.info(box.textContent, box.innerText);
    this.translator.getTranslation(text).subscribe(res => box.setAttribute('placeholder',res.text));
  }
}
