import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HashComponent} from './hash/hash.component';
import {CipherComponent} from './cipher/cipher.component';
import {CipherAlgoComponent} from './cipher/cipher-list/cipher-algo/cipher-algo.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'hash', component: HashComponent},
  {
    path: 'cipher', component: CipherComponent,
    children: [
      {path: ':algo', component: CipherAlgoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
