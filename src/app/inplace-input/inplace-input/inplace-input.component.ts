import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ezo-inplace-input',
  templateUrl: './inplace-input.component.html',
  styleUrls: ['./inplace-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InplaceInputComponent),
      multi: true
    }
  ]
})
export class InplaceInputComponent implements OnInit, ControlValueAccessor {
  private static readonly ENTER = 13;

  private _value: string;
  private _isEditing = false;

  onChange = (newValue: string) => {};
  onTouch = () => {};

  constructor() { }

  get value(): string {
    return this._value;
  }

  set value(newValue: string) {
    this._value = newValue;
    this.onChange(newValue);
  }

  ngOnInit() {
  }

  isEditing(): boolean {
    return this._isEditing;
  }

  isNotEditing(): boolean {
    return !this._isEditing;
  }

  startEdtiting() {
    this._isEditing = true;
  }

  stopEditingIfEnterIsPressed(event: KeyboardEvent) {
    this._isEditing = event.keyCode !== InplaceInputComponent.ENTER;
  }


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
