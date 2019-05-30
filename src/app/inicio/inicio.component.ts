import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../services/data-api.service';
import { Router } from '@angular/router';

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

  constructor(private fb: FormBuilder,private dataApi:DataApiService, private router: Router) {
    console.log("constructor");
    this.getSummoner();
  }

  onSubmit() {
    if(this.invocadoresForm.valid){
      this.router.navigate(['/invocador/'+this.invocadoresForm.get('nombreInvocador').value])
    }
  }

  getSummoner(){
  }

}
