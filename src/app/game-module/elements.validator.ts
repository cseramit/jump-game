import { AbstractControl } from '@angular/forms';

export function ElementArrayValidator(control: AbstractControl): { [key: string]: boolean } | null {

  if (control.value !== undefined && control.value != null) {
    const _value = control.value;
    const _elementsArray = _value.replace(/\s/g, '');

    // The input is invalid, if it does not begin with 0.
    if (_elementsArray.length <= 0 || _elementsArray[0] !== '0' ) {
      return { 'elementsAreInvalid': true };
    }

    for (let _i = 0; _i < _elementsArray.length; _i++) {
      // The input is invalid if it contains anything other than 0 and 1 after trimming.
      if (_elementsArray[_i] !== '0' && _elementsArray[_i] !== '1') {
        return { 'elementsAreInvalid': true };
      }
    }
  }
  // If we reach here, the input is valid. In that case, we need to return null.
  return null;
}
