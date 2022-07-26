import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NeverDisplayedComponent } from './components/never-displayed/never-displayed.component';
import { StatusRedirectGuard } from './guards/status-redirect.guard';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { LazyLoadedComponent } from './lazy-loaded.component';

@NgModule({
  declarations: [LazyLoadedComponent, NeverDisplayedComponent],
  imports: [CommonModule, LazyLoadedRoutingModule],
  providers: [StatusRedirectGuard],
  exports: [],
})
export class LazyLoadedModule {}
