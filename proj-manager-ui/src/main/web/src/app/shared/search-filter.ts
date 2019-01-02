import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {

  transform(items: any[], searchText: string, label: string): any[] {
    if(!items) return [];

    if(!searchText) return items;

    if (searchText == '' || searchText == null) return [];

    if(null !== label && 'userDetails' === label) {
        return items.filter(e => e['fname'].toLowerCase().indexOf(searchText) > -1 || e['lname'].toLowerCase().indexOf(searchText) > -1 || e['empId'].toLowerCase().indexOf(searchText) > -1);
    }
    if(null !== label && 'projectDetails' === label) {
        return items.filter(e => e['project'].toLowerCase().indexOf(searchText) > -1);
    }
    if(null !== label && 'parentTaskDetails' === label) {
        return items.filter(e => e['parentTaskName'].toLowerCase().indexOf(searchText) > -1);
    }   
   }

}