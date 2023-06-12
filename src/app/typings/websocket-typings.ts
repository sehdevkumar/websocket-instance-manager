import { Subject } from 'rxjs';
import { Socket } from 'socket.io-client';





export interface InstanceBaseInterface {
  instanceList: any;
  onDropInstanceByEventAndNameSpace<T>(...args: T[]): void;
  onDropInstanceByUUID<T>(...args: T[]): void;
  onDropInstanceCollection<T>(...args: T[]): void;
  onPushInstance<T>(...args: T[]): void;
}


export interface WsEventHandlerBaseClass<T> {
   socket: Socket;
   emitter: Subject<T>;
   data: T;
   nameSpaceName: string;
   eventName: string;
   dataList: T[];
   UUID: string;
   pushAndNotify(...args: T[]): void;
}

