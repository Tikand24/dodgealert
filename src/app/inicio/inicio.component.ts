import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  invocadoresForm = this.fb.group({
    nombreInvocador: [null, Validators.required]
  });
  nombreConstante = 'Nuevo nombre constante';
  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}
