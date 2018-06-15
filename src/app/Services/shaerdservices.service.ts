import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShaerdservicesService {
 public almacenar: Subject<any> = new Subject<any>();
  constructor() { }

  getAlmacenar(){
    return this.almacenar;
  }

  setAlmacenar(parametro){
    return this.almacenar.next(parametro)
  }
}
