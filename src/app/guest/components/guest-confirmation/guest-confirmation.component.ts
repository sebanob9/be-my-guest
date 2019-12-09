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

}
}

function init() {

  // Dropdown
  // --------------------------------------------------------
  var dropdown = document.querySelector('.dropdown__btn');

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
  var input = document.querySelector('.search__input');

  input.onfocus = function(e) {
    this.setAttribute('aria-expanded', 'true');
  }

  input.onblur = function(e) {
    this.setAttribute('aria-expanded', 'false');
  }

};

window.onload = init;
