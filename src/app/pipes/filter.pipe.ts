import { Pipe, PipeTransform } from '@angular/core';
import { Location } from '../shared/models/location.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(location: Location[], search: string): Location[] {
    return location.filter(item => item.name.indexOf(search) > -1 || item.name.toLowerCase().indexOf(search) > -1);
  }

}
