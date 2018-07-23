import { ElementArrayValidator } from './elements.validator';
import { FormControl } from '@angular/forms';

describe('Unit Test for ElementsValidator', () => {

  it('should return null if the control value is null.', () => {
    const formControl = new FormControl(null);
    expect(ElementArrayValidator(formControl)).toBeNull();
  });

  it('should return error object if the control value starts with 1.', () => {
    const formControl = new FormControl('101010101');
    const retObject = {'elementsAreInvalid': true};
    expect(ElementArrayValidator(formControl)).toEqual(retObject);
  });

  it('should return error object if the control value contains only spaces', () => {
    const formControl = new FormControl('      ');
    const retObject = {'elementsAreInvalid': true};
    expect(ElementArrayValidator(formControl)).toEqual(retObject);
  });

  it('should return error object if the control value contains anything other than 0 and 1', () => {
    const formControl = new FormControl('0121211111000000');
    const retObject = {'elementsAreInvalid': true};
    expect(ElementArrayValidator(formControl)).toEqual(retObject);
  });

  it('should return null if the control value contains only 0s and 1s', () => {
    const formControl = new FormControl('000000111111010101');
    expect(ElementArrayValidator(formControl)).toBeNull();
  });

  it('should return null if the control value contains only 0s, 1s and spaces', () => {
    const formControl = new FormControl('0 0 0 1 1 0 1 01110000');
    expect(ElementArrayValidator(formControl)).toBeNull();
  });

});
