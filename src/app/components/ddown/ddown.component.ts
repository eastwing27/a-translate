import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { YandexTranslateService } from '../../services/yt.service';

@Component({
    selector: 'dropdown',
    templateUrl: './ddown.component.html'
})
export class DropdownComponent implements OnInit, OnChanges
{
    @Input() langs = [];

    private _subscription;

    constructor(private translate: YandexTranslateService){
    }

    ngOnInit(){
        
    }

    ngOnChanges(changes: SimpleChanges)
    {

    }

}