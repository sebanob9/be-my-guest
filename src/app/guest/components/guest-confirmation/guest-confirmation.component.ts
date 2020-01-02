import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { GuestsService } from 'src/app/core/services/guests.service';
import { Guest } from 'src/app/core/models/guest';




@Component({
  selector: 'app-guest-confirmation',
  templateUrl: './guest-confirmation.component.html',
  styleUrls: ['./guest-confirmation.component.scss']
})
export class GuestConfirmationComponent implements OnInit {

  showcompanion = false;
  showallergies = false;

  allergies = {
    noAllergies: true,
    queso: false,
    marisco: false,
    pescado: false,
    gluten: false
  };

  constructor(public guestsService: GuestsService) { 
    
  }

  ngOnInit() {
    this.init() 
  }

  addGuest(form: NgForm) {
    console.log(form.value);
    this.guestsService.postGuest(form.value)
      .subscribe( res => {
        this.resetForm(form); 
      });
  }


  resetForm(form?: NgForm) {
    if(form) {
      form.reset();
      this.guestsService.selectedGuest = new Guest();
    }
  }

 init() {

    // Dropdown
    // --------------------------------------------------------
    let dropdown: any = document.querySelector('.dropdown__btn');
  
    dropdown.onclick = function(event) {
      var dropdown = this;
      if (dropdown.hasAttribute('aria-expanded') && dropdown.getAttribute('aria-expanded') === 'false') {
        dropdown.setAttribute('aria-expanded', 'true');
      } else {
        dropdown.setAttribute('aria-expanded', 'false');
      }
    }
  };
  
  toggleCompanion(value) {
    this.showcompanion = value;
  }

  notAllergic() {
    this.showallergies = !this.showallergies
  }

  toggleAllergy(allergy) {
    if (allergy === 'noAllergies') {
      if (!this.allergies.noAllergies) {
        this.allergies = {
          noAllergies: true,
          queso: false,
          marisco: false,
          pescado: false,
          gluten: false
        };
      } else {
        this.allergies.noAllergies = false;
      }
    } else {
      this.allergies.noAllergies = false;
      this.allergies[allergy] = !this.allergies[allergy];
    }
  }
}

