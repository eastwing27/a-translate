import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YandexTranslateService{
    private key ='trnsl.1.1.20170810T113301Z.ec25b3d83ad619ec.cd2d68d2518995b4d8e6be4ac91af1e125401b4e';
    private endpoint = 'https://translate.yandex.net/api/v1.5/tr.json';

    constructor(private http: Http){
        
    }

    private makeUrl(text: string){
        return `${this.endpoint}/translate?key=${this.key}&text=${text}&lang=ru`
    }

    translate(text: string){
        return this.http.get(this.makeUrl(text))
            .map(res => res.json());
    }
}