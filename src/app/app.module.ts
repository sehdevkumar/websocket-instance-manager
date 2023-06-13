import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingletonService } from './services/singleton.service';
import { SocketIoService } from './services/socket-io.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SingletonService, SocketIoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
