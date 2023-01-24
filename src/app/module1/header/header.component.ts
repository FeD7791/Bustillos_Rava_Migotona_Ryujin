import { Component } from '@angular/core';
import { faPhone,faUser,faCartShopping, faArrowDown, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faphone = faPhone
  fauser = faUser
  facart = faCartShopping
  faarrow = faArrowDown
  fasearch = faSearch

}
