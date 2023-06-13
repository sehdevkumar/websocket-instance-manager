import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { WsHandlerBaseClass } from '../base-classes/ws-handler-base-class';
import { IWSEventDataItem } from '../../typings/websocket-typings';
import { AppWebSocketNSPEnum, WSEventEnums } from '../../typings/websocket-enums';
import { v4 as uuidv4 } from 'uuid';

export class WSHandlerClass extends WsHandlerBaseClass {
  dataList: IWSEventDataItem[];
  socket: Socket;
  emitter: Subject<IWSEventDataItem>;
  data: any;
  nameSpaceName: AppWebSocketNSPEnum;
  eventName: WSEventEnums;
  UUID: string;


  get dataStashList(): IWSEventDataItem[] {
     return this.dataList;
  }

  get getEmitter(): Subject<IWSEventDataItem> {
     return this.emitter;
  }



  constructor(socket: Socket, eventName: WSEventEnums, nameSpaceName: AppWebSocketNSPEnum) {
    super();

    this.socket = socket;
    this.emitter = new Subject();
    this.nameSpaceName = nameSpaceName;
    this.eventName = eventName;

    this.generateConnection();
  }

  pushAndNotify(args: IWSEventDataItem): void {

    const dataItem: IWSEventDataItem = {
      registeredNSP: this.nameSpaceName,
      uuid: uuidv4(),
      instanceData: args,
      __creationEpoch: Date.now(),
      __readableTimestamp: ''
    };

    this.dataList?.push(dataItem);
    this.getEmitter?.next(dataItem);
  }

  generateConnection(...args: any[]): void {
    this.socket.on(this.eventName, (data: any) => {

      console.log(`OK Data Recevied For Event ${this.eventName} And NameSpace ${this.nameSpaceName}`, data);

      this.pushAndNotify(data);

    });
  }
}
