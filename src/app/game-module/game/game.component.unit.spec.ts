import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule, FormGroupDirective, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared-module/shared.module';

import { GameComponent } from './game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameService } from '../game.service';


describe('Unit Test Suite for :GameComponent:', () => {
  let component: GameComponent;
  let gService: GameService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        SharedModule,
        BrowserAnimationsModule
      ],
      declarations: [
        GameComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gService = new GameService();
    component = new GameComponent(gService);
  });

  it('should create the GameComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create the Game Form', () => {
    const spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
    expect(((component as any).gameForm)).toBeTruthy();
    expect(((component as any).gameForm.value.jumps)).toBeNull();
    expect(((component as any).gameForm.value.elements)).toBeNull();
  });


  it('should not display results section on component load', () => {
    component.ngOnInit();
    expect((component as any).displayResults).toBeFalsy();
    expect((component as any).win).toBeFalsy();
  });

  it('should call evaluateJumps method in the GameService on click of submit', () => {
    const spy = spyOn(gService, 'evaluateJumps').and.returnValue(true);
    const inputString = '010100100';
    const jumpLength = 3;
    component.ngOnInit();
    (component as any).gameForm.value.jumps = jumpLength;
    (component as any).gameForm.value.elements = inputString;
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(jumpLength, inputString);
  });


  it('should display the results once the evaluateJumps is called', () => {
    const spy = spyOn(gService, 'evaluateJumps').and.returnValue(true);
    const inputString = '010100100';
    const jumpLength = 3;
    component.ngOnInit();
    (component as any).gameForm.value.jumps = jumpLength;
    (component as any).gameForm.value.elements = inputString;
    component.onSubmit();
    expect((component as any).displayResults).toBeTruthy();
  });


  it('should display that player can win if evaluateJumps returns true', () => {
    const spy = spyOn(gService, 'evaluateJumps').and.returnValue(true);
    const inputString = '010100100';
    const jumpLength = 3;
    component.ngOnInit();
    (component as any).gameForm.value.jumps = jumpLength;
    (component as any).gameForm.value.elements = inputString;
    component.onSubmit();
    expect((component as any).win).toBeTruthy();
  });


  it('should display that player can\'t win if evaluateJumps returns false', () => {
    const spy = spyOn(gService, 'evaluateJumps').and.returnValue(false);
    const inputString = '010100100';
    const jumpLength = 3;
    component.ngOnInit();
    (component as any).gameForm.value.jumps = jumpLength;
    (component as any).gameForm.value.elements = inputString;
    component.onSubmit();
    expect((component as any).win).toBeFalsy();
  });


  it('should reset the state of the form if onReset is called', () => {

    const formDirective = new FormGroupDirective(null, null);
    (component as any).gameForm = new FormGroup({});
    const resetSpy = spyOn((component as any).gameForm, 'reset').and.callFake(() => {});
    const formDirectiveSpy = spyOn(formDirective, 'resetForm').and.callFake(() => {});


    component.onReset(formDirective);

    expect((component as any).displayResults).toBeFalsy();
    expect((component as any).win).toBeFalsy();
    expect(resetSpy).toHaveBeenCalled();
    expect(formDirectiveSpy).toHaveBeenCalled();
  });


});
