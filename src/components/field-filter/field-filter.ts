//import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Validators, FormGroup, FormControl,FormBuilder,AbstractControl } from '@angular/forms';

/**
 * Generated class for the FieldFilterComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'field-filter',
  templateUrl: 'field-filter.html'
})
export class FieldFilterComponent {

  text: string;
  field:AbstractControl;
  @Input() placeholder:string;
  @Output() doFilter:EventEmitter<any>;
  filterForm:FormGroup;
  constructor(
    fb:FormBuilder
  ) {
    this.placeholder = 'cucù';
    this.filterForm = fb.group({
      'field':['',Validators.required]
    })
    this.field = this.filterForm.controls['field']
    console.log('valueChange',this.field.valueChanges);
    this.field.valueChanges.subscribe(
      (value:string) => {
      console.log('stringa di ricerca',value);
       this.doFilter =  new EventEmitter<string>();
      this.doFilter.emit({filterString:value});
    })
    console.log('Hello FieldFilterComponent Component');
    this.text = 'Hello World';
  }

}
