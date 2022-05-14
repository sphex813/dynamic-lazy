import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [DynamicComponent],
  imports: [CommonModule],
})
export class LazyLoadedModule {
  public static components = {
    dynamicComponent: DynamicComponent,
  };
}
