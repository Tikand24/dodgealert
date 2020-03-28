import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataApiService } from '../services/data-api.service';
import { Rating } from '../models/Rating';

@Component({
  selector: 'app-califyinvocador',
  templateUrl: './califyinvocador.component.html',
  styleUrls: ['./califyinvocador.component.css']
})
export class CalifyinvocadorComponent {
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  ratingForm = this.fb.group({
    rating: [null, Validators.required]
  });
  ratingTitle='';
  hasUnitNumber = false;

  private ratings: Rating[];


  constructor(private fb: FormBuilder, private dataApiService: DataApiService) {}

  onSubmit() {
    alert('Thanks!');
  }
  ratingChange () {
    if (this.ratingForm.value.rating) {
      this.ratingTitle = this.ratingForm.value.rating.name + ' | ' + this.ratingForm.value.rating.description;
    }
  }
  ngOnInit(){
    this.paramDefault();
  }
  paramDefault(){
    this.dataApiService.getRatingsHonor().subscribe((rating: Rating[]) => {
      this.ratings = rating;
    });
  }
}
