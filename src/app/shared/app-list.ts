import { AppItem, AppWebSocketList } from '../typings/app-typins';
import { AppWebSocketNSPEnum, WSEventEnums } from '../typings/websocket-enums';


export const webSocketConnectionList: AppWebSocketList = {
  nameSpace: AppWebSocketNSPEnum.WS_NSP__WAREHOUSE_SURVEY,
  events: [WSEventEnums.RAY_RESPONSE, WSEventEnums.TALLY_SHEET_STATUS_UPDATE]
};

export const AppListItems: Array<AppItem> = [
    {
      appName: 'any',
      webSocketConnectionList
    }
];
