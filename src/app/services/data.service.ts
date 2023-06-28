import { Injectable, effect, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JokeModel } from '../models/JokeModel';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  readonly http = inject(HttpClient)
  readonly joke$$ = signal<Observable<JokeModel> | undefined>(undefined);

  constructor() {
    effect(() => {
      console.log(this.joke$$());
    })
  }

  request() {
    const jokeObs$ = this.http.get<JokeModel>("https://api.chucknorris.io/jokes/random?category=dev")
    this.joke$$.set(jokeObs$)
  }
}
