import {
  AppWebSocketNSPEnum,
  WSEventEnums,
} from 'src/app/typings/websocket-enums';
import { Component, OnInit } from '@angular/core';
import { SocketIoService } from './services/socket-io.service';
import { SingletonService } from './services/singleton.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private socketService: SocketIoService,
    private ss: SingletonService,
  ) {}

  ngOnInit(): void {
    this.socketService.initWebsocketConnections();

    this.ss.webSocketConnectionManagerClass
      .getWsHandlerByEventAndNameSpace(
        WSEventEnums.TALLY_SHEET_STATUS_UPDATE,
        AppWebSocketNSPEnum.WS_NSP__WAREHOUSE_SURVEY,
      )
      ?.getEmitter.subscribe((res) => {
        console.log('Data Recevied', res);
      });
  }
}
