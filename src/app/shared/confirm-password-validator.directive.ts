import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmPasswordValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmPasswordValidatorDirective,
        multi: true
    }]
})
export class ConfirmPasswordValidatorDirective implements Validator {

    @Input() appConfirmPasswordValidator: string;

    validate(passwordGroup: AbstractControl): { [key: string]: any } | null {

        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');

        if (passwordField && confirmPasswordField && passwordField.value !== confirmPasswordField.value) {
            return { 'notEqual': true };
        }

        return null;
    }

}
