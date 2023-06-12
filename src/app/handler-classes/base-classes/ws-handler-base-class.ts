import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { WsEventHandlerBaseClass } from '../../typings/websocket-typings';

export abstract class WsHandlerBaseClass implements WsEventHandlerBaseClass<any> {
  abstract dataList: any[];
  abstract socket: Socket;
  abstract emitter: Subject<any>;
  abstract data: any;
  abstract nameSpaceName: string;
  abstract eventName: string;
  abstract UUID: string;
  abstract pushAndNotify(...args: any[]): void;
  abstract generateConnection(...args: any[]): void;

}
