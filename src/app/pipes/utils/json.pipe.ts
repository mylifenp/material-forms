import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'json',
  standalone: true,
})
export class JsonPipe implements PipeTransform {
  /**
   * @param value A value of any type to convert into a JSON-format string.
   */

  transform(value: unknown, ...args: unknown[]): unknown {
    return JSON.stringify(value, null, 2);
  }
}
