import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokeComponent } from "./components/joke/joke.component";
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, JokeComponent]
})
export class AppComponent {
  title = 'ChangesOverload';
  dataService = inject(DataService)

  refreshJoke(){
    this.dataService.request()
  }
}
