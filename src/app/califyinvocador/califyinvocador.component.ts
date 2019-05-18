import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-califyinvocador',
  templateUrl: './califyinvocador.component.html',
  styleUrls: ['./califyinvocador.component.css']
})
export class CalifyinvocadorComponent {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  califyForm = this.fb.group({
    calify: [null, Validators.required]
  });
  califyTitle='';
  hasUnitNumber = false;

  califycations= [
    {name: 'Poco Aceptable', abbreviation: 'A-'},
    {name: 'Aceptable', abbreviation: 'A+'},
    {name: 'Lamentable', abbreviation: 'B'},
    {name: 'No Apto', abbreviation: 'B+'},
    {name: 'Perfecto', abbreviation: 'S+'},
    {name: 'Buena Actitud', abbreviation: 'S-'},
    {name: 'Casi perfecto', abbreviation: 'S'}
  ];


  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
  califyChange () {
    console.log(this.califyForm.value.calify);
    if (this.califyForm.value.calify) {
      this.califyTitle = this.califyForm.value.calify.name + ' | ' + this.califyForm.value.calify.abbreviation;
    }
  }
}
