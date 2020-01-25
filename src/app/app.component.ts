import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  showHeader = false;
  title = 'Be My Guest';

  constructor(private router: Router) {
    
  }

  ngOnInit() {
    this.router.events.subscribe(_ => {
      if (this.router.url.startsWith('/guest')) {
        this.showHeader = false;
      } else {
        this.showHeader = true;
      }
    })
  }
}
