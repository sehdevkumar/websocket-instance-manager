import {
  WSEventEnums,
  AppWebSocketNSPEnum,
} from '../../typings/websocket-enums';
import { WsInstanceList } from '../../typings/websocket-typings';
import { InstanceBaseClass } from '../base-classes/instance-base-class';
import { WSHandlerClass } from './ws-handler-class';
import { v4 as uuidv4 } from 'uuid';

export class WsManagerClass extends InstanceBaseClass {
  instanceList: WsInstanceList;

  get getAccumulatedUUIDs(): Array<string> {
    return this.instanceList?.reduce((acc, val) => acc.concat(val?.UUID), []);
  }

  onDropInstanceByEventAndNameSpace(
    eventName: WSEventEnums,
    nameSpaceName: AppWebSocketNSPEnum,
  ): void {
    this.instanceList?.filter(
      (ins) =>
        ins?.instance?.eventName !== eventName &&
        ins?.instance?.nameSpaceName !== nameSpaceName,
    );
  }
  onDropInstanceByUUID(uuid: string): void {
    this.instanceList?.filter((ins) => ins?.UUID !== uuid);
  }
  onDropInstanceCollection(): void {
    this.instanceList = [];
  }
  onPushInstance(wsHandlerClass: WSHandlerClass): void {
    if (
      this.instanceList?.findIndex(
        (ins) =>
          ins?.UUID?.toLocaleLowerCase() ===
          wsHandlerClass?.UUID?.toLocaleLowerCase(),
      ) === 1
    ) {
      return;
    }

    let uuid = uuidv4();
    while (this.getAccumulatedUUIDs?.includes(uuid)) {
      uuid = uuidv4();
    }
    this.instanceList?.push({ UUID: uuid, instance: wsHandlerClass });
  }
  getInstances(): WsInstanceList {
    return this.instanceList;
  }

  getWsHandlerByEventAndNameSpace(
    eventName: WSEventEnums,
    nameSpaceName: AppWebSocketNSPEnum,
  ): WSHandlerClass {
    return this.instanceList?.find(
      (ins) =>
        ins?.instance?.nameSpaceName === nameSpaceName &&
        ins?.instance?.eventName === eventName,
    )?.instance;
  }
}
