import { Component, OnInit } from '@angular/core';
import { Gamer } from '../models/gamer.model';

@Component({
  templateUrl: './gamer-list.component.html',
  styleUrls: ['./gamer-list.component.css']
})
export class GamerListComponent implements OnInit {

  gamers: Gamer[] = [
    {
      id: 1,
      name: 'Vertigo',
      gender: 'Male',
      email: 'vertigocs@steam.com',
      phoneNumber: 9084528590,
      contactPreference: 'Phone Number',
      dateOfBirth: new Date('02/04/1995'),
      game: 'CSS',
      isActive: true,
      photoPath: 'assets/images/vertigo.png'
    },
    {
      id: 2,
      name: 'Altair',
      gender: 'Male',
      email: 'altaircs@steam.com',
      phoneNumber: 9487213565,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/04/1995'),
      game: 'CS GO',
      isActive: true,
      photoPath: 'assets/images/vertigo.png'
    },
    {
      id: 3,
      name: 'Sam',
      gender: 'Male',
      email: 'samcs@steam.com',
      phoneNumber: 8087954612,
      contactPreference: 'Phone Number',
      dateOfBirth: new Date('12/04/1995'),
      game: 'CSS',
      isActive: true,
      photoPath: 'assets/images/vertigo.png'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
