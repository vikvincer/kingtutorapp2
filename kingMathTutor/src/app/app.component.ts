import { Component,trigger,state,style,transition,animate,keyframes  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
      animations:[
        trigger('navTrigger',[
            state('hidden',style({
                marginLeft:'-300px'
            })),
            state('show',style({
                marginLeft:'0'
            })),
              transition('show => hidden',
                animate('500ms')
              ),
              transition('hidden => show',
                animate('500ms')
              )    
        ])
        ]
})
export class AppComponent {
  navState = "hidden";
  myClass = 'close';
  toogleOpen() {
    this.navState = (this.navState === 'show' ? 'hidden' : 'show' );
    this.myClass = (this.myClass === 'open' ? 'close' : 'open' );
  }
}
