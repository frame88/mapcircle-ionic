import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'splash',
    loadComponent: () => import('./features/splash/splash.page').then( m => m.SplashPage)
  },  {
    path: 'account',
    loadComponent: () => import('./features/account/account.page').then( m => m.AccountPage)
  },
  {
    path: 'chat',
    loadComponent: () => import('./features/chat/chat.page').then( m => m.ChatPage)
  },
  {
    path: 'chat-detail',
    loadComponent: () => import('./features/chat-detail/chat-detail.page').then( m => m.ChatDetailPage)
  },

];
