import { Pipe, PipeTransform } from '@angular/core';
import { form_elements } from './crud.service';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // /**
  //  * Pipe filters the list of elements based on the search text provided
  //  *
  //  * @param items list of elements to search in
  //  * @param searchText search string
  //  * @returns list of elements filtered by search text or []
  //  */

  transform(value: form_elements, ...args: unknown[]): unknown {
    // transform(items: form_elements, searchText: string){
    console.log(value)
    // let rege = new RegExp(searchText)
    // console.log(rege)
    // let boleano1 = rege.test(items.nombre)
    // console.log(items.nombre)
    // if(boleano1){
    //   return items
    // }else{
    //   return 'hello'
    // }

      return value
  
  }




}


