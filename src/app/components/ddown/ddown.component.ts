import { Component, Input } from '@angular/core';

@Component({
    selector: 'dropdown',
    templateUrl: './ddown.component.html'
})
export class DropdownComponent
{
    @Input() langs = [];

    constructor(){
        console.log(this.langs);
    }
}