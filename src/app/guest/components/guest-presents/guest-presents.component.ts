import { Component,  ViewEncapsulation} from '@angular/core';
import { User} from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';



@Component({
  selector: 'app-guest-presents',
  templateUrl: './guest-presents.component.html',
  styleUrls: ['./guest-presents.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GuestPresentsComponent {
  
  
  message: string = 'Invitado eliminado';
  //name = 'Angular 4';
  //actionButtonLabel: string = 'Retry';
  //action: boolean = true;
  //addExtraClass: boolean = false;
  setAutoHide: boolean = true;
  autoHide: number = 50000;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  

  constructor(public userservice: UserService, public snackBar: MatSnackBar) { }
  
  open() {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.extraClasses = this.addExtraClass ? ['test'] : undefined;
    this.snackBar.open(this.message, this.action ? this.actionButtonLabel : undefined, config);
  }

  
}
