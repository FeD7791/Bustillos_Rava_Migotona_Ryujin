import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-manager-desktop',
  templateUrl: './manager-desktop.component.html',
  styleUrls: ['./manager-desktop.component.css']
})
export class ManagerDesktopComponent {
  constructor(public crud: CrudService){}

}
