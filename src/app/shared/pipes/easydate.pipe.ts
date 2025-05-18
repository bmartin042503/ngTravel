import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'easydate',
  standalone: true
})
export class EasydatePipe implements PipeTransform {

  transform(dateInput: Date | string | null | undefined, format: string = 'yyyy-MM-dd HH:mm'): string {
    if (!dateInput) return '';

    const d = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

    if (!(d instanceof Date) || isNaN(d.getTime())) {
      return 'Helytelen formátum';
    }

    const yyyy = d.getFullYear();
    const MM = this.padZero(d.getMonth() + 1);
    const dd = this.padZero(d.getDate());
    const HH = this.padZero(d.getHours());
    const mm = this.padZero(d.getMinutes());
    const ss = this.padZero(d.getSeconds());

    return format
      .replace('yyyy', yyyy.toString())
      .replace('MM', MM)
      .replace('dd', dd)
      .replace('HH', HH)
      .replace('mm', mm)
      .replace('ss', ss);
  }

  private padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}