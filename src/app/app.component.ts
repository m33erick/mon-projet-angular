import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((reslove, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        reslove(date);
      }, 2000
    );
  });

  appareils =[
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'ordinateur',
      status: 'éteint'
    }
  ]

  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';

  constructor() {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    }
    onAllumer() {
      console.log('On allume tout !');
    }
}
