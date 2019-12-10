import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-guest-confirmation',
  templateUrl: './guest-confirmation.component.html',
  styleUrls: ['./guest-confirmation.component.scss']
})
export class GuestConfirmationComponent implements OnInit {

  showcompanion = false;

  constructor() { 
    
  }

  ngOnInit() {
    this.init()
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
  
    // Search form
    // --------------------------------------------------------
    
    let input: any = document.querySelector('.search__input');
  
    input.onfocus = function(e) {
      this.setAttribute('aria-expanded', 'true');
    }
  
    input.onblur = function(e) {
      this.setAttribute('aria-expanded', 'false');
    }
  
  };

  toggleCompanion(value) {
    this.showcompanion = value;
  }
}

