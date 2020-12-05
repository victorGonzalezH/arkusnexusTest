import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './common/admin.guard';
import { AuthGuard } from './common/auth.guard';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';


const routes: Routes = [

  { path: '',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  canActivate: [AuthGuard] },

  { path: 'login',
  loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },

  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

  { path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  canActivate: [AdminGuard]
  },

  { path: 'notAuthorized',
    component: NotAuthorizedComponent
  },

  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule),
    canActivate: [AuthGuard]
  },

  { path: '**',
  loadChildren: () => import('./main/main.module').then(m => m.MainModule),
  canActivate: [AuthGuard] },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
