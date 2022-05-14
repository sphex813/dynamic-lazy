import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  constructor() {
    console.log('Dummy service was initialized.');
  }
}
