import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnfoundComponent } from './feature/unfound/unfound.component';
import { HomeComponent } from './feature/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { ChatContainerComponent } from './feature/chat/components/chat-container/chat-container.component';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: HomeComponent
  },
    {
    path: 'chat',
    canActivate: [AuthGuard],
    component: ChatContainerComponent
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feature/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: UnfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
