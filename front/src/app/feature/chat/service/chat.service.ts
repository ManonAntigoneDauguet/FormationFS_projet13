import { Injectable } from '@angular/core';
import * as Stomp from '@stomp/stompjs';
import { Observable, Subject } from 'rxjs';
import * as SockJS from 'sockjs-client';
import { ChatMessage } from '../interfaces/message.interface';


@Injectable({ providedIn: 'root' })
export class ChatService {

  private stompClient!: Stomp.CompatClient;
  private messageSubject = new Subject<ChatMessage>();

  /**
   * Connects WebSocket with STOMP/SockJs
   */
  public connect(): void {
    const socket = new SockJS('http://localhost:3004/api/ws-chat');
    this.stompClient = Stomp.Stomp.over(socket);

    this.stompClient.connect({}, (frame: Stomp.Frame) => {
      console.log('Connected to WebSocket :', frame);

      this.stompClient.subscribe('/topic/public', message => {
        this.messageSubject.next(JSON.parse(message.body));
      });
    }, (error: Stomp.Message | string) => {
      console.error('STOMP connection error :', error);
    });
  }

  public sendMessage(message: ChatMessage): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.send(
        '/app/chat.sendMessage',
        {},
        JSON.stringify(message)
      );
    } else {
      console.warn('Error on sending message : unconnected STOMP.');
    }
  }

  public getMessages(): Observable<any> {
    return this.messageSubject.asObservable();
  }

  public disconnect(): void {
    if (this.stompClient && this.stompClient.connected) {
      this.stompClient.disconnect(() => {
        console.log('Disconnect from WebSocket');
      });
    }
  }
}
