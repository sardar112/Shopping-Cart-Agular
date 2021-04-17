import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 sub = new Subject();
  constructor() { }

sendMessage(product ){
 this.sub.next(product);
}

getMessage(){
  return this.sub.asObservable();
}

}
