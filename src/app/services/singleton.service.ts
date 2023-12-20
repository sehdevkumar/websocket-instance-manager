import { Injectable } from '@angular/core';
import { WsManagerClass } from '../handler-classes/instance-manager-classes/ws-manager-class';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  webSocketConnectionManagerClass: WsManagerClass = new WsManagerClass();
  webSocketConnectionMessage: Subject<string> = new Subject<string>();

  constructor() { }
}
