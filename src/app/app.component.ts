import {
  Component,
  createNgModuleRef,
  Injector,
  NgModuleRef,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from './lazy-loaded/dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('container', { static: false, read: ViewContainerRef })
  public viewRef: ViewContainerRef;

  constructor(private _injector: Injector) {}

  public onClick(): void {
    import('./lazy-loaded/lazy-loaded.module').then((importedFile) => {
      const componentToOpen =
        importedFile.LazyLoadedModule.components.dynamicComponent;
      this._openLazyLoadedComponent(importedFile, componentToOpen);
    });
  }

  private _openLazyLoadedComponent<T>(
    importedFile: T,
    componentToOpen: Type<DynamicComponent>
  ): void {
    const module: Type<T> = (<any>importedFile)[Object.keys(importedFile)[0]];
    const moduleRef: NgModuleRef<T> = createNgModuleRef(module, this._injector);
    this.viewRef.createComponent(componentToOpen, { ngModuleRef: moduleRef });
  }
}
