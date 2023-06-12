import { DefaultEventsMap } from '@socket.io/component-emitter';
import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { WsInstanceInterface, WsInstanceItemList } from '../typings/websocket-typings';

export abstract class WsInsBaseClass<T> implements WsInstanceInterface<T>  {
  abstract wsNameSpaceCollection: string[];
  abstract WsCustomsEventsNameCollection: string[];
  abstract instanceList: WsInstanceItemList<T>;


  abstract getSubscriptionByEventNameAndNameSpace(eventName: string, nameSpaceName: string): Subject<T>;

  abstract onDropWsConnectionByUUID(uuid: string): void;
  abstract onDropWsConnectionCollection(): void;
  abstract onPushWsConnection(eventName: string, nameSpaceName: string): void;
  abstract onDropWsConnectionByEventAndNameSpace(eventName: string, nameSpaceName: string): void;
}
