import {
  Directive,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
    selector: '[appBooleanOnly]'
})
export class BoolOnlyDirective {
    private regex: RegExp = new RegExp(/^[0-1]+$/g);

    // Some special keys should be allowed besides, 0 and 1.
    private specialKeys: Array<string> = [ 'Backspace', 'Tab', 'End', 'Home' ];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(event: KeyboardEvent) {
        // Special key handling
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }

        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);

        // Supress the default event if something other than allowed is pressed.
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}
