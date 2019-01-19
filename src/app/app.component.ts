import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise((reslove, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        reslove(date);
      }, 2000
    );
  });

  appareils : any[];

  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';

  constructor(private appareilService: AppareilService) {
      setTimeout(
        () => {
          this.isAuth = true;
        }, 4000
      );
    }
    ngOnInit() {
      this.appareils = this.appareilService.appareils;
    }
    
    onAllumer() {
      this.appareilService.switchOnAll();
    }

    onEteindre() {
      if(confirm('Etes-vous sur de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
      } else {
        return null;
      }
    }

}
