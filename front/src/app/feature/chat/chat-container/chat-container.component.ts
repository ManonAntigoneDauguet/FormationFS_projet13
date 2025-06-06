import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from 'app/core/components/header/header.component';

@Component({
  selector: 'app-chat-container',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.scss']
})
export class ChatContainerComponent {

  public form = this.formBuilder.group({
    message: [
      '',
      [
        Validators.required
      ]
    ]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public onSubmit() {
    console.log(`"${this.form.value.message}"`);
    this.form.reset();
  }

}
