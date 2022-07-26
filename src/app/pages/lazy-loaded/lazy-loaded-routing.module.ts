import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './lazy-loaded.routes';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadedRoutingModule {}
