import { AppItem, AppWebSocketList } from '../typings/app-typins';
import { AppWebSocketNSPEnum, WSEventEnums } from '../typings/websocket-enums';


export const webSocketConnectionList: AppWebSocketList = {
  nameSpace: AppWebSocketNSPEnum.WS_NSP__APP,
  events: [WSEventEnums.APP_EVENT]
};

export const AppListItems: Array<AppItem> = [
    {
      appName: 'any',
      webSocketConnectionList
    }
];
