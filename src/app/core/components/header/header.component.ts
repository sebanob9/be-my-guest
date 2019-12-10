import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
}
/*   window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "10px 10px";
    document.getElementById("logo").style.width = "20%";
  } else {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}
  }
 */

