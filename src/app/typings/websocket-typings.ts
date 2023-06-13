import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { AppWebSocketNSPEnum, WSEventEnums } from './websocket-enums';
import { WSHandlerClass } from '../handler-classes/instance-manager-classes/ws-handler-class';





export interface InstanceBaseInterface<T, K> {
  instanceList: WsInstanceList;
  onDropInstanceByEventAndNameSpace(eventName: T, nameSpaceName: K): void;
  onDropInstanceByUUID(uuid: string): void;
  onDropInstanceCollection(): void;
  onPushInstance(wsHandlerInstance: WSHandlerClass): void;
  getInstances(): WsInstanceList;
  getWsHandlerByEventAndNameSpace(eventName: T, nameSpaceName: K): WSHandlerClass;
}



export interface WsEventHandlerBaseClass<T> {
   socket: Socket;
   emitter: Subject<T>;
   data: T;
   nameSpaceName: AppWebSocketNSPEnum;
   eventName: WSEventEnums;
   dataList: T[];
   UUID: string;
   pushAndNotify(...args: T[]): void;
}

export interface IWSEventDataItem {
  registeredNSP: AppWebSocketNSPEnum;
  uuid: string;
  instanceData: any;
  __creationEpoch: number;
  __readableTimestamp: string;
}


export interface ItemInstance<T> {
   UUID: string;
   instance: T;
}


export type WsHandlerInstance = ItemInstance<WSHandlerClass>;
export type WsInstanceList = Array<WsHandlerInstance>;





