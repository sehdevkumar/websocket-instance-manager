import {
  AppWebSocketNSPEnum,
  WSEventEnums,
} from './../../typings/websocket-enums';
import {
  InstanceBaseInterface,
  WsHandlerInstance,
  WsInstanceList,
} from '../../typings/websocket-typings';
import { WSHandlerClass } from '../instance-manager-classes/ws-handler-class';

export abstract class InstanceBaseClass
  implements InstanceBaseInterface<WSEventEnums, AppWebSocketNSPEnum> {
  abstract instanceList: WsInstanceList;

  abstract onDropInstanceByEventAndNameSpace(
    eventName: WSEventEnums,
    nameSpaceName: AppWebSocketNSPEnum,
  ): void;

  abstract onDropInstanceByUUID(uuid: string): void;

  abstract onPushInstance(wsHandlerClasa: WSHandlerClass): void;
  abstract onDropInstanceCollection(): void;

  abstract getInstances(): WsInstanceList;

  abstract getWsHandlerByEventAndNameSpace(
    eventName: WSEventEnums,
    nameSpaceName: AppWebSocketNSPEnum,
  ): WSHandlerClass;
}
