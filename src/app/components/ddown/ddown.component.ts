import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { YandexTranslateService } from '../../services/yt.service';

@Component({
    selector: 'dropdown',
    templateUrl: './ddown.component.html'
})
export class DropdownComponent implements OnInit, OnChanges
{
    @Input() langs = [];
    @Input() forInput = false;
    @Input() selectedLangId : string;
    @Input() setLanguage: (id:string, name:string) => any;

    private langsLoaded = false;

    constructor(private translate: YandexTranslateService){
    }

    ngOnInit(){
    }
    
    ngOnChanges(changes: SimpleChanges)
    {
        if(!!changes.langs){
            this.langs = this.langs.sort((a, b) =>
            {
                if (a.value < b.value) return -1;
                if (a.value > b.value) return 1;
                return 0;
            });
        }
        this.langsLoaded = this.langsLoaded || (!!changes.langs && !!changes.langs.currentValue);
    }

}