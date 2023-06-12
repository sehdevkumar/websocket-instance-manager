import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';

export interface WsInstanceInterface<T> {
  wsNameSpaceCollection: Array<string>;
  WsCustomsEventsNameCollection: Array<string>;
  getSubscriptionByEventNameAndNameSpace: (
    eventName: string,
    nameSpaceName: string,
  ) => Subject<T>;
}

export interface WsInstance<T> {
  uuid: string;
  instance: T;
}

export type WsInstanceItemList<T> = Array<WsInstance<WsInstanceInterface<T>>>;
