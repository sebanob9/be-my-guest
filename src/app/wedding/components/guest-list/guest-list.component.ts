import { Component, OnInit } from '@angular/core';
import { Guest } from 'src/app/core/models/guest';
import { GuestsService } from 'src/app/core/services/guests.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(public guestsService: GuestsService) { }

  ngOnInit() {
    this.getGuests();
  }
  

  getGuests() {
    this.guestsService.getGuest()
      .subscribe( res => {
        this.guestsService.guests2 = res as Guest[]; // OJO: guest2 al ser el servicio que apunta a la BBDD
        console.log(res);
      });
  }

  editGuest(guest: Guest) {
    this.guestsService.selectedGuest = guest; // primero seleccionamos al invitado
  }


  deleteGuest(_id: string) {
      if(confirm('¿Estas seguro de querer eliminar a este invitado?')) {
        this.guestsService.deleteGuest(_id)
          .subscribe(res => {
            this.getGuests();
          });
      }
}

  // revisar, no se guardan los cambios correctamente
 /*  addGuest(form: NgForm) {
    this.guestsService.putGuest(form.value)
      .subscribe(res => {
        console.log(res);
      })
  } */
}