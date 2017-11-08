import { Component, Input } from '@angular/core';

@Component({
    selector: 'textbox',
    templateUrl: './textarea.component.html'
})
export class TextAreaComponent
{
    @Input() disabled: string;
    @Input() placeholder: string;
    @Input() areaId: string;
    @Input() onTextInput: (text: string) => any;

    userText: string;

    constructor(){
        this.userText = '';
    }

    private onTextChanged(){
        if (!!this.onTextInput){
            this.onTextInput(this.userText);
        }
    }
}