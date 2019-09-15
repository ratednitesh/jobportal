import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  items: Array<any> = [];
  transform(items: any[], skills?: string, location?: string, companyname?: string): any {
    this.items = [];
    for (let i in items) {
      if (skills == undefined || items[i].skills.toLowerCase().indexOf(skills.toLowerCase()) != -1) {
        if (location == undefined || items[i].location.toLowerCase().indexOf(location.toLowerCase()) != -1) {
          if (companyname == undefined || items[i].companyname.toLowerCase().indexOf(companyname.toLowerCase()) != -1) {
            this.items.push(items[i]);
          }
        }
      }

    }

    return this.items.map(t=> {
      return {
          filteredItem: t,
          filteredLength: this.items.length
      }
  });
  }

}
