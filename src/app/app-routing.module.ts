import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from './blog/blog.component';
import {HomeComponent} from './home/home.component';
import {AProposComponent} from './apropos/apropos.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgModule} from '@angular/core';
import {ChatComponent} from './chat/chat.component';
import {TableauBordVoituresComponent} from './tableau-bord-voitures/tableau-bord-voitures.component';
import {VoitureDescComponent} from './voiture-desc/voiture-desc.component';
import {GetFilmsComponent} from './get-films/get-films.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'tableau-bord-voitures/:id', component: VoitureDescComponent},
  {path: 'films', component: GetFilmsComponent},
  {path: 'tableau-bord-voitures', component: TableauBordVoituresComponent},
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
