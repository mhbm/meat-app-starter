import { Component, OnInit, Input, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms'
import { RadioOption } from './radio-option.model';


//Registrar o componente como um ValueAcessor que fica disponivel para as diretivas 
@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> RadioComponent),
      multi : true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value : any

  onChange : any

  constructor() { }

  ngOnInit() {
  }

  setValue(value : any) {
    this.value = value;
    this.onChange(this.value)
  }

  //Chamado pela diretiva quando quer passar um valor
  writeValue(obj: any) {
    this.value = obj;
  }

  //Passa uma função e essa função é sempre chamado quando o valor interno do componente é alterado
  registerOnChange(fn: any) {
    this.onChange = fn
  }


  //Quando o usuário entra no componente
  registerOnTouched(fn: any) {

  }

  setDisabledState(fn: any) {

  }


}
