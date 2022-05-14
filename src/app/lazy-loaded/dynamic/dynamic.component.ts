import { Component } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
})
export class DynamicComponent {
  constructor(private _dummyService: DummyService) {}
}
