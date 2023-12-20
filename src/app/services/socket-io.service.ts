import { Socket } from 'socket.io-client';
// Service for managing Socket.IO connections.

import { Injectable } from '@angular/core';
import { AppListItems } from '../shared/app-list';
import { AppWebSocketNSPEnum, WSEventEnums } from '../typings/websocket-enums';
import * as SocketIo from 'socket.io-client';
import { SingletonService } from './singleton.service';
import { WSHandlerClass } from '../handler-classes/instance-manager-classes/ws-handler-class';

// This service provides methods to initialize and manage Socket.IO connections.
// It handles events such as connection, disconnection, connection errors, and authentication.

// Example usage:
// const socketService = new SocketIoService();
// socketService.initWebsocketConnections();

interface SocketIOConnection {
  nameSpace: AppWebSocketNSPEnum;
  socket: SocketIo.Socket;
}

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  socketConnection: Array<SocketIOConnection> = [];

  // The base URL for the Socket.IO connections.
  baseUrl = 'wss://www.example.com/socketserver';

  // Returns the list of application items.
  get getAppListItmes() {
    return AppListItems;
  }

  constructor(private ss: SingletonService) {}

  // Initializes Socket.IO connections for each application item.
  public initWebsocketConnections(): void {
    this.getAppListItmes?.forEach((item) => {
      const currentNs = item?.webSocketConnectionList?.nameSpace;
      const currentEvents = item?.webSocketConnectionList?.events;

      const socket = SocketIo.connect(this.baseUrl, {
        transports: ['websocket'],
      });

      socket.on(WSEventEnums.CONNECT, () => {
        console.log('Connected');
        // Push the Ws Handler Instance to Manager Class After Socket Connection Successfully Done.
        currentEvents?.forEach((event) => {
          this.ss.webSocketConnectionManagerClass?.onPushInstance(
            new WSHandlerClass(socket, event, currentNs),
          );
        });

        // Authentication from server if Invalid then Disconnect All Socket Connections
        // Send username and password to join event on the server
        const username = 'john_doe';
        const password = 'password123';

        // Emits a 'join' event with the username and password to authenticate on the server.
        socket.emit('join', { username, password }, (response) => {
          console.log('Join response:', response);

          // if Invalid User or UnAuthrized then Disconnect All Websocket Connections
          if (response === 401) {
            console.log('Invalid');
            this.onDisconnect();
          }
        });

        this.socketConnection.push({ nameSpace: currentNs, socket });
      });

      // Event handler for the 'connect_error' event.
      // It is triggered when there is an error in the WebSocket connection.
      socket.on(WSEventEnums.CONNECT_ERROR, () => {
        this.ss.webSocketConnectionMessage.next(
          'Web socket Connection has error',
        );
        console.log('Web socket Connection has error');
      });

      // Event handler for the 'connect_failed' event.
      // It is triggered when the WebSocket connection fails.
      socket.on(WSEventEnums.CONNECT_FAILED, () => {
        this.ss.webSocketConnectionMessage.next('Web socket Connection failed');

        console.log('Web socket Connection failed');
      });

      // Event handler for the 'disconnect' event.
      // It is triggered when the WebSocket connection is disconnected.
      socket.on(WSEventEnums.DISCONNECT, () => {
        this.ss.webSocketConnectionMessage.next(
          'Web socket Connection disconnected',
        );

        console.log('Web socket Connection disconnected');
      });
    });
  }

  onDisconnect() {
    this.socketConnection?.forEach((wsConnection) => {
      wsConnection.socket?.disconnect();
    });
  }
}
