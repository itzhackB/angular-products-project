import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converteToSpaces',
})
export class ConverteToSpacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
      return value.replace(character, ' ');
  }
}
