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

    private _subscription;

    constructor(private translate: YandexTranslateService){
    }

    ngOnInit(){
        console.warn('langs', this.langs);
    }

    ngOnChanges(changes: SimpleChanges)
    {

    }

}