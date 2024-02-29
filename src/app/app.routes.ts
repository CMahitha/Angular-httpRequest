import { Routes } from '@angular/router';
import { HelloComponent } from '../hello/hello.component';
import { RouterDemoComponent } from '../Components/router-demo/router-demo.component';
import { AdminModule } from './admin/admin.module';
export const routes: Routes = [
    {path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
    {path:"hello", component:HelloComponent},
    {path:"Demo", component:RouterDemoComponent},
{ path: 'lazy-loading', loadChildren: () => import('../Components/lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) }


];