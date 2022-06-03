import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  sum(n1: number, num2: number) {
    return n1 + num2;
  }



}
