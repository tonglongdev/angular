import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  data = {
    title: 'PROJECT',
  };

  onClick() {
    alert('yoooooooooooooo');
  }
  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
