import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {AProposComponent} from './apropos/apropos.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'a-propos', component: AProposComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
