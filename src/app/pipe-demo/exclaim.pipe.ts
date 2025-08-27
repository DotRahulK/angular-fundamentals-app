import { Pipe, PipeTransform } from '@angular/core';

/**
 * A simple custom pipe that appends one or more exclamation marks to
 * a given string. The second argument controls how many marks to add.
 */
@Pipe({
  name: 'exclaim',
  standalone: true
})
export class ExclaimPipe implements PipeTransform {
  transform(value: string, exclaimCount: number = 1): string {
    return value + '!'.repeat(exclaimCount);
  }
}