import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { MaterialModule } from '../../material-module/material.module';
import { Router, RouterLinkWithHref } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class RouterStub {
  navigate(params) {
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Router, useClass: RouterStub }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate the user to Welcome component if onLogoClick method is called.', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.onLogoClick();

    expect(spy).toHaveBeenCalled();

  });

});
