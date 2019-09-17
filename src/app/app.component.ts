import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bonjour Angular';
  add = null;
  welcome: string = 'hello';

  click() {
    if(this.title=="Bonjour angular") {
      this.title="Bonjour Angular";
    } else {
    this.title="Bonjour angular";
    }
  }

  ajoutElement(pas){
    this.add += pas;
    if(this.add > 100) {
      this.add = 0;
    }
  }

  btnText = "ajouter un element";
}
