import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YandexTranslateService{
    private key ='trnsl.1.1.20170810T113301Z.ec25b3d83ad619ec.cd2d68d2518995b4d8e6be4ac91af1e125401b4e';
    private endpoint = 'https://translate.yandex.net/api/v1.5/tr.json';

    constructor(private http: Http){
        
    }

    private flatten(arr: any[]){
        if (!arr || arr.length == 0)
            return '';

        let flat = arr
            .map(item => item.key + '=' + item.value)
            .join('&');
        return '&' + flat;
    }

    private makeUrl(route: string, options = []){
        var res = `${this.endpoint}/${route}?key=${this.key}` + this.flatten(options);
        return res;
    }

    getTranslation(text: string, lang: string){
        var options = [];
        options.push({ key: "text", value: text });
        options.push({ key: "lang", value: lang });

        let url = this.makeUrl('translate', options);

        return this.http.get(url).map(res => res.json());
    }
    
    getLanguages(lang: string = 'en'){
        return this.http.get(this.makeUrl('getLangs', [{key: 'ui', value: lang}]))    
            .map(res => res.json());    
    }
}