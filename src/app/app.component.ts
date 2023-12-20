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
    public socketService: SocketIoService,
    public ss: SingletonService,
  ) {}

  ngOnInit(): void {
    this.socketService.initWebsocketConnections();

    this.ss.webSocketConnectionManagerClass
      .getWsHandlerByEventAndNameSpace(
        WSEventEnums.APP_EVENT,
        AppWebSocketNSPEnum.WS_NSP__APP,
      )
      ?.getEmitter.subscribe((res) => {
        console.log('Data Recevied', res);
      });
  }
}
