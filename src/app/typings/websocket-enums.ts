export enum WSEventEnums {

  // Socket.IO Events
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_FAILED = 'connect_failed',
  CONNECT_ERROR = 'connect_error',

  // Customs Application Events
   TALLY_SHEET_STATUS_UPDATE = 'tallysheet_status_update',
  RAY_RESPONSE = 'ray_response',
}



/**
 * NameSpace For application
 */
export enum AppWebSocketNSPEnum {
   WS_NSP__WAREHOUSE_SURVEY = '/warehouse-survey',
}
