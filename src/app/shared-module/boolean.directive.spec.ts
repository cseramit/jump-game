import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BoolOnlyDirective } from './boolean.directive';

@Component({
  template: `<input type="text" appBooleanOnly>`
})
class TestComponent {
}

describe('Unit Test: BoolOnlyDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, BoolOnlyDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('should prevent entering anything other than boolean', () => {
    fixture.detectChanges();
    const event = {
      key: '2',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should allow 0 to be entered', () => {
    fixture.detectChanges();
    const event = {
      key: '0',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

  it('should allow 1 to be entered', () => {
    fixture.detectChanges();
    const event = {
      key: '1',
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
      key: 'Backspace',
      preventDefault: function () {
      }
    };

    spyOn(event, 'preventDefault');
    inputEl.triggerEventHandler('keydown', event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });

});
