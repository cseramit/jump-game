import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { MaterialModule } from '../../material-module/material.module';
import {RouterTestingModule } from '@angular/router/testing';
import { MatCard } from '@angular/material/card';
import { RouterLinkWithHref } from '@angular/router';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toBeDefined();
  });


  it('should render a mat card', () => {
    const compiled = fixture.debugElement.nativeElement;
    const card = fixture.debugElement.queryAll(By.directive(MatCard));
    expect(card).toBeDefined();
  });

  it('should render 2 paragraphs with welcome texts.', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const paras = fixture.debugElement.queryAll(By.css('p'));
    const dePara1: HTMLElement = paras[0].nativeElement;
    const dePara2: HTMLElement = paras[1].nativeElement;
    expect(paras.length).toBe(2);
    expect(dePara1.innerText).toContain('This is a fun game');
    expect(dePara2.innerText).toContain('The game will evaluate the input');
  }));

  it('should contain a route to /game', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    const rLink    = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    expect(rLink).toBeDefined();

  }));


});
