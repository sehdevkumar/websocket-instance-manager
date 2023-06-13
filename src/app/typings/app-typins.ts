import { AppWebSocketNSPEnum, WSEventEnums } from './websocket-enums';

export interface AppItem {
   appName: string;
   webSocketConnectionList: AppWebSocketList;
}


export interface AppWebSocketList {
   nameSpace: AppWebSocketNSPEnum;
   events: Array<WSEventEnums>;
}
