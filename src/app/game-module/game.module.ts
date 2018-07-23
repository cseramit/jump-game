import { NgModule } from '@angular/core';
import { GameComponent } from './game/game.component';
import { GameRoutingModule } from './game.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared-module/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FlexLayoutModule
  ],
  declarations: [
    GameComponent
  ],
  providers: []
})
export class GameModule {}
