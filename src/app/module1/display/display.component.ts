import { Component , OnInit} from '@angular/core';
import { user_database_table } from '../service1.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service1Service } from '../service1.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  myobservable$: Observable<user_database_table[]> //Defino observable

  table_elements: user_database_table[] = [] //para crear la tabla necesitamos una fuente de informacion
  displayedColumns: string[] = ['id', 'name', 'lastname', 'email', 'bdate' , 'createdAt']; //Para las columnas de la tabla

  observer = {
    next: (x:user_database_table[]) => {
      console.log('Observer got a next value: ' + JSON.stringify(x.splice(1,10))  )
    }
  }



  constructor(private service1:Service1Service,private http: HttpClient){
    this.myobservable$ = this.http.get<user_database_table[]>(this.service1.URL_all_users)
  }

  ngOnInit(): void { //Cuando se cargue el componente se llenara el arreglo de table_elements
    // this.myobservable$.subscribe(this.observer)
    this.myobservable$.subscribe((observer3)=>{this.table_elements = observer3.splice(1,10)})
    
  }

}
