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
    this.getSummoner();
    this.onChangeNombre();
  }

  onChangeNombre(){
    this.invocadoresForm.get('nombreInvocador').valueChanges.subscribe(val => {
      let invocadorArray = val.split(" se unió a la sala");
      let invocadorString="";
      if(invocadorArray.length>1){
        invocadorString = invocadorArray.toString();
        this.invocadoresForm.get('nombreInvocador').setValue(invocadorArray.toString());
      }
    });
  }
  
  onSubmit() {
    let invocadorArray=this.invocadoresForm.get('nombreInvocador').value.split(',');
    if(invocadorArray.length>1){
      if(this.invocadoresForm.valid){
        this.router.navigate(['/multi-invocador/'+this.invocadoresForm.get('nombreInvocador').value])
      }
    }else{
      if(this.invocadoresForm.valid){
        this.router.navigate(['/invocador/'+this.invocadoresForm.get('nombreInvocador').value])
      }
    }
  }

  getSummoner(){
  }

}
