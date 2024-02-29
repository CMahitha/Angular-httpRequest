import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyDemoComponent } from '../lazy-demo/lazy-demo.component';
import { RouterDemoComponent } from '../router-demo/router-demo.component';
import { HelloComponent } from '../../hello/hello.component';

const routes: Routes = [
  { path: '', component: LazyDemoComponent },
  {path: '', component: RouterDemoComponent},
  {path: '', component: HelloComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }

