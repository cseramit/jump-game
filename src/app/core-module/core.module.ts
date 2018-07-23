import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MaterialModule } from '../material-module/material.module';
import { RouterModule } from '@angular/router';

/* Import third party build ins */
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [
    HeaderComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ],
  exports: [
    HeaderComponent,
    WelcomeComponent,
    PagenotfoundComponent
  ]
})
export class CoreModule {}
