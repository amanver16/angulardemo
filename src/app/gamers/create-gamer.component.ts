import { Component, OnInit } from '@angular/core';
import { Game } from '../models/game.model';
import { Gamer } from '../models/gamer.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  templateUrl: './create-gamer.component.html',
  styleUrls: ['./create-gamer.component.css']
})
export class CreateGamerComponent implements OnInit {

  datePickerConfig: Partial<BsDatepickerConfig>;
  showProfilePhoto = false;
  photoPath = 'assets/images/vertigo.png';

  gamer: Gamer = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactPreference: null,
    game: '0',
    isActive: null,
    dateOfBirth: new Date(1990, 0, 1),
    photoPath: null
  };

  games: Game[] = [
    { id: '1', gameName: 'CS Go' },
    { id: '2', gameName: 'CS Source' },
    { id: '3', gameName: 'CS Condition Zero' }
  ];

  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2018, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  saveGamer(gamer: Gamer): void {
    console.log(gamer);
  }

  toggleShowProfilePhoto(): void {
    this.showProfilePhoto = !this.showProfilePhoto;
    this.showProfilePhoto ? this.gamer.photoPath = this.photoPath : this.gamer.photoPath = null;
  }

}
