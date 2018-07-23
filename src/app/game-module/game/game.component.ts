import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { ElementArrayValidator } from '../elements.validator';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [ GameService ]
})
export class GameComponent implements OnInit {
  public gameForm: FormGroup;
  public displayResults: boolean;
  public win: boolean;

  constructor(private _gameService: GameService) { }

  ngOnInit() {
    this.win = false;
    this.displayResults = false;
    this.gameForm = new FormGroup(
      {
        'jumps' : new FormControl(null, [Validators.required]),
        'elements': new FormControl(null, [Validators.required, ElementArrayValidator])
      }
    );
  }

  onSubmit() {
    this.win = this._gameService.evaluateJumps(this.gameForm.value.jumps, this.gameForm.value.elements);
    this.displayResults = true;
  }

  onReset(formDirective: FormGroupDirective) {
    this.win = false;
    this.displayResults = false;
    this.gameForm.reset();
    formDirective.resetForm();
  }

}
