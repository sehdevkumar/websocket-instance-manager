export enum WSEventEnums {

  // Socket.IO Events
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_FAILED = 'connect_failed',
  CONNECT_ERROR = 'connect_error',

  // Customs Application Events
  APP_EVENT = 'app_event',
}



/**
 * NameSpace For application
 */
export enum AppWebSocketNSPEnum {
   WS_NSP__APP = '/app-namespace',
}
