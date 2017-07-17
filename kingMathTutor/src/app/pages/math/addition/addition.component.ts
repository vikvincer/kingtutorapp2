import { Component, OnInit, ElementRef} from '@angular/core';
import { browser } from 'protractor';

@Component({
    moduleId: module.id,
    templateUrl: './addition.component.html'
})
export class AdditionComponent implements OnInit {
    items:Array<{}> = [];
    active: number = 1;
    readyToSubmit:boolean = false;
    submitted: boolean = false;
    results:any = [];
    carry:Array<{}> = [];
    carry_1:string = "+";
    carry_2:string = "+";
    constructor(private _element: ElementRef) { }

    ngOnInit() {
        for(let i = 0;i<20;i++) {
            this.items.push({
                "number": i,
                "addtop":(Math.floor((Math.random() * (1000 - 0)))+0+1),
                "addbot":(Math.floor((Math.random() * (1000 - 0)))+0+1),
                "answer": null
            })
        }
        this.carryInit();
     }
    nextItem(answer,currentItem){
        var number = this.items[currentItem]['number'];
        var addtop = this.items[currentItem]['addtop'];
        var addbot = this.items[currentItem]['addbot'];
        var textBox = this._element.nativeElement.querySelector('.math-answer');
        var answer = answer;
        this.carry_1 = "+";
        this.carry_2 = "+";
        if(this.active<=20) {
            this.items[currentItem] = {
                "number": number,
                "addtop":addtop,
                "addbot":addbot,
                "answer": +answer          
            };
            if(this.active == 20){
                this.readyToSubmit = true;
            }
            this.active = this.active + 1;
            textBox.value = "";
        }
        this.carryInit();
    }
    submit() {
        this.submitted = true;
        this.results = this.items;
    }
    carryInit() {
        // var addTop = this.items[this.active-1]['addtop'].toString();
        // var addBot = this.items[this.active-1]['addbot'].toString();
        // // if() {

        // // }

    }
    carry1() {
        this.carry_1 = (this.carry_1 === '1' ? '+' : '1' );
    }
    carry2() {
        this.carry_2 = (this.carry_2 === '1' ? '+' : '1' );
    }
}