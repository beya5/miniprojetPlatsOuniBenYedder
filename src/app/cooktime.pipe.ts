import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cooktime',
  standalone: true
})
export class CooktimePipe implements PipeTransform {

  transform(value: any):string {
    return 'Cook Time : ' + value;
  }

}
