import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FlagComponent } from './flag/flag.component';
import { TopFlagComponent } from './top-flag/top-flag.component';
import { MiddleFlagComponent } from './middle-flag/middle-flag.component';
import { BottomFlagComponent } from './bottom-flag/bottom-flag.component';
import { CalcImcComponent } from './calc-imc/calc-imc.component';
import {FormsModule} from '@angular/forms';
import { RolePlayListComponent } from './role-play-list/role-play-list.component';
import {MatCardModule, MatGridListModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FlagComponent,
    TopFlagComponent,
    MiddleFlagComponent,
    BottomFlagComponent,
    CalcImcComponent,
    RolePlayListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
