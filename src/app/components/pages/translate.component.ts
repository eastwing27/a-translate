import { Component, Output, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { YandexTranslateService } from '../../services/yt.service';

@Component({
    selector: 'translate',
    templateUrl: './translate.component.html'
})
export class TranslateComponent implements OnInit
{
    langs: { key: string; value: string }[] = [];
    originalLang: { id: string, name: string };
    translationLang: { id: string, name: string };

    constructor(private translator: YandexTranslateService, private ref: ChangeDetectorRef)
    {

    }
    private toArray(obj)
    {
        let result = [];
        for (var prop in obj)
        {
            result.push({ key: prop, value: obj[prop] });
        }
        return result;
    }

    ngOnInit()
    {
        this.originalLang = { id: null, name: 'Autodetect' };
        this.translationLang = { id: 'ru', name: 'Russian' };

        this.translator.getLanguages()
            .subscribe(res =>
            {
                this.langs = this.toArray(res.langs);
            });
    }

    @Output()
    translate(text: string)
    {
        let box = document.getElementById("output-box");

        if (!text)
        {
            box.setAttribute('placeholder', 'Translation appears here');
            return;
        }

        let lang = `${this.originalLang.id ? this.originalLang.id + '-' : ''}${this.translationLang.id}`;
        this.translator.getTranslation(text, lang).subscribe(res =>
        {
            let translation = res.text;
            if (!this.originalLang.id)
            {
                let id = res.lang.split('-')[0];
                let lang = this.langs.find(item => item.key == id).value;
                translation = `From autodected ${lang}: ${translation}`
            }
            box.setAttribute('placeholder', translation);
        });
    }

    @Output()
    setOriginalLang(new_id: string, new_name: string)
    {
        this.originalLang = { id: new_id, name: new_name };
    }

    @Output()
    setTranslationLang(new_id: string, new_name: string)
    {
        this.translationLang = { id: new_id, name: new_name };
    }

}