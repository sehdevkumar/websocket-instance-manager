import { InstanceBaseInterface } from '../../typings/websocket-typings';

export abstract class InstanceBaseClass implements InstanceBaseInterface {
  abstract instanceList: any;
  abstract onDropInstanceByEventAndNameSpace<T>(...args: T[]): void;
  abstract onDropInstanceByUUID<T>(...args: T[]): void;
  abstract onDropInstanceCollection<T>(...args: T[]): void;
  abstract onPushInstance<T>(...args: T[]): void;
}


