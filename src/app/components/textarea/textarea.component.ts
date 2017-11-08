import { Component, Input } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textarea.component.html'
})
export class TextAreaComponent
{
    @Input() disabled: string;
    @Input() placeholder: string;
    @Input() onKeyUp;

    userText: string;

    constructor(){
        this.userText = '';
    }
}