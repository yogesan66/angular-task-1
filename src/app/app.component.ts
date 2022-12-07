import { Component, Type, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
input: any;
  checkbox:any
text: any;
checkselected :any
  onclick(){
      if(this.checkbox.checked == true){
         this.checkselected = true
      }

    }
  }