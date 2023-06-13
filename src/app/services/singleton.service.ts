import { Injectable } from '@angular/core';
import { WsManagerClass } from '../handler-classes/instance-manager-classes/ws-manager-class';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {

  webSocketConnectionManagerClass: WsManagerClass = new WsManagerClass();

  constructor() { }
}
