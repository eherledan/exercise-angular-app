import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FlagComponent } from './flag/flag.component';
import { TopFlagComponent } from './top-flag/top-flag.component';
import { MiddleFlagComponent } from './middle-flag/middle-flag.component';
import { BottomFlagComponent } from './bottom-flag/bottom-flag.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    FlagComponent,
    TopFlagComponent,
    MiddleFlagComponent,
    BottomFlagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
