import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';
import { WsInsBaseClass } from './Ws-Ins-base-Class';
import { WsInstanceItemList } from '../typings/websocket-typings';
import { DefaultEventsMap } from '@socket.io/component-emitter';

export class WsInstanceHandlerClass<T> extends WsInsBaseClass<T> {
  wsNameSpaceCollection!: string[];
  WsCustomsEventsNameCollection!: string[];
  instanceList: WsInstanceItemList<T>;

  constructor() {
    super();
  }

  onDropWsConnectionByUUID(uuid: string): void {
    console.log('On Drop Connection By UUID');
  }

  onDropWsConnectionByEventAndNameSpace(
    eventName: string,
    nameSpaceName: string,
  ): void {
    console.log('hello Droped Locations');
  }

  onDropWsConnectionCollection(
  ): void {}

  getSubscriptionByEventNameAndNameSpace(
    eventName: string,
    nameSpaceName: string,
  ): Subject<any> {
    return;
  }

  onPushWsConnection(eventName: string, nameSpaceName: string): void {
    console.log('');
  }
}
