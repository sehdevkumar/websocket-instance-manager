import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { WsHandlerBaseClass } from '../base-classes/ws-handler-base-class';

export class WSHandlerClass extends WsHandlerBaseClass {
  dataList: any[];
  socket: Socket;
  emitter: Subject<any>;
  data: any;
  nameSpaceName: string;
  eventName: string;
  UUID: string;

  constructor(socket: Socket, eventName: string, nameSpaceName: string) {
    super();

    this.socket = socket;
    this.emitter = new Subject();
    this.nameSpaceName = nameSpaceName;
    this.eventName = eventName;

    this.generateConnection();
  }

  pushAndNotify(...args: any[]): void {




  }

  generateConnection(...args: any[]): void {
    this.socket.on(this.eventName, (data) => {

      console.log('OK');

      this.pushAndNotify(data);

    });
  }
}
