import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { IWSEventDataItem, WsEventHandlerBaseClass } from '../../typings/websocket-typings';
import { AppWebSocketNSPEnum, WSEventEnums } from '../../typings/websocket-enums';

export abstract class WsHandlerBaseClass implements WsEventHandlerBaseClass<IWSEventDataItem> {
  abstract dataList: IWSEventDataItem[];
  abstract socket: Socket;
  abstract emitter: Subject<IWSEventDataItem>;
  abstract data: any;
  abstract nameSpaceName: AppWebSocketNSPEnum;
  abstract eventName: WSEventEnums;
  abstract UUID: string;
  abstract pushAndNotify(...args: IWSEventDataItem[]): void;
  abstract generateConnection(...args: any[]): void;

}
