import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'names'
})
export class NamesPipe implements PipeTransform {

  transform(value: {firstName: string, lastName: string}, ...args: any[]): string {

    return (value.firstName + " " + value.lastName);
  }

}
