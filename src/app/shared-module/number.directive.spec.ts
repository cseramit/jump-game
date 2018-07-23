import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NumbersOnlyDirective } from './number.directive';

@Component({
  template: `<input type="text" appNumbersOnly>`
})
class TestComponent {
}

describe('Unit Test: NumberOnly', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NumbersOnlyDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should prevent entering anything other than number', () => {
    fixture.detectChanges();
    const event = {
      key: 'D',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow any number to be entered', () => {
    fixture.detectChanges();
    const event = {
      key: '8',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });


  it('should allow special keys to be entered', () => {
    fixture.detectChanges();
    const event = {
      key: 'Tab',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

});
