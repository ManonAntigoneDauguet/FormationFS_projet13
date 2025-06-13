import { CommonModule, DatePipe } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from 'app/core/components/header/header.component';
import { User } from 'app/core/interfaces/user.interface';
import { SessionUserService } from 'app/core/services/sessionUser/session-user.service';
import { ChatMessage } from '../../interfaces/message.interface';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './chat-container.component.html',
  providers: [DatePipe],
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent implements OnInit, OnDestroy {

  public user!: User | null;
  public messages: ChatMessage[] = [];
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  public form = this.formBuilder.group({
    message: [
      '',
      [
        Validators.required
      ]
    ]
  });

  constructor(
    private formBuilder: FormBuilder,
    private sessionUserService: SessionUserService,
    private chatService: ChatService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.chatService.connect();
    this.fetchUser();
    this.fetchMessages();
  }

  ngOnDestroy(): void {
    this.chatService.disconnect();
  }

  public onSubmit() {
    console.log(`"${this.form.value.message}"`);

    if (this.form.valid && this.form.value.message && this.user) {
      const message: ChatMessage = {
        content: this.form.value.message,
        authorId: this.user.id,
        timestamp: new Date()
      }

      this.chatService.sendMessage(message);
      this.form.reset();
    }
  }

  private fetchMessages() {
    this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
      setTimeout(() => this.scrollToBottom(), 0);
    });
  }

  private fetchUser() {
    this.sessionUserService.getUser$().subscribe(user => {
      if (user) {
        this.user = user;
      }
    });
  }

  private scrollToBottom(): void {
    const el = this.messagesContainer?.nativeElement;
    el.scrollTop = el.scrollHeight;
  }

  public convertSendTime(date: Date): string | null {
    return this.datePipe.transform(date, 'MMM d, y, h:mm:ss a');
  }
}
