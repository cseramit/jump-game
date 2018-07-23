import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material-module/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../../shared-module/shared.module';

import { MatInput } from '@angular/material/input';
import { MatChip } from '@angular/material/chips';

import { GameComponent } from './game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('Integration Test Suite for :GameComponent:', () => {

  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

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
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the GameComponent and Respective Fixture', () => {
    expect(component).toBeTruthy();
    expect(fixture).toBeTruthy();
    expect((component as any).gameForm).toBeDefined();
  });


  it('should render 2 buttons', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  }));


  it('should render 2 form fields', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const inputControls = fixture.debugElement.queryAll(By.directive(MatInput));
    expect(inputControls.length).toBe(2);
  }));

  it('should display text \'Yes, You can win.\' if the win is true', async(() => {
    const compiled = fixture.debugElement.nativeElement;

    (component as any).displayResults = true;
    (component as any).win = true;
    fixture.detectChanges();

    const inputControls  = fixture.debugElement.queryAll(By.directive(MatChip))[0];
    const el: HTMLElement = inputControls.nativeElement;



    expect(el.innerText).toContain('Yes');
  }));


  it('should display text \'No, You can\'t win.\' if the win is true', async(() => {
    const compiled = fixture.debugElement.nativeElement;

    (component as any).displayResults = true;
    (component as any).win = false;
    fixture.detectChanges();

    const inputControls  = fixture.debugElement.queryAll(By.directive(MatChip))[0];
    const el: HTMLElement = inputControls.nativeElement;



    expect(el.innerText).toContain('No');
  }));


  it('should call onReset method if the Reset button is clicked', () => {

    const spy = spyOn(component, 'onReset').and.callFake( () => {} );
    const compiled = fixture.debugElement.nativeElement;
    const evaluateButton = fixture.debugElement.queryAll(By.css('button'))[1];
    const el: HTMLElement = evaluateButton.nativeElement;

    el.click();

    expect(spy).toHaveBeenCalled();

  });

  it('should call onSubmit method if the Evaluate button is clicked', () => {

    const spy = spyOn(component, 'onSubmit').and.callFake( () => {} );
    const compiled = fixture.debugElement.nativeElement;
    const evaluateButton = fixture.debugElement.queryAll(By.css('button'))[0];
    const el: HTMLElement = evaluateButton.nativeElement;

    expect((component as any).gameForm).toBeDefined();
    (component as any).gameForm.setValue({ 'jumps': 3, 'elements': '0100001'});
    fixture.detectChanges();

    el.click();

    expect(spy).toHaveBeenCalled();
  });

});
