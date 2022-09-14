import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxListValueAccessorDirective } from './directives/checkbox-list-value-accessor';
import { CurrencyMaskDirective } from './directives/formatmoney.directive';
import { FormatMoneyDirective } from './directives/formatmoney.onblur.directive';

@NgModule({
  declarations: [CheckboxListValueAccessorDirective,CurrencyMaskDirective,
    FormatMoneyDirective],
  imports: [
    CommonModule
  ],
  exports:[CheckboxListValueAccessorDirective,CurrencyMaskDirective,
    FormatMoneyDirective]
})
export class DirectiveModule { }
