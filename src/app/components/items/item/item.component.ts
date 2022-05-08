import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../shared/item.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(
    public service : ItemService,
    private firestore : AngularFirestore,
    private toastr : ToastrService
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
    this.service.formData ={
      id: '',
      fullName : '',
      price : 0,
      type : '',
      alc_percent : 0,
      img_url : ''
    }
  }

  onSubmit(form:NgForm){
    let data = {
    'fullName': form.value.fullName,
    'price': form.value.price,
    'type': form.value.type,
    'alc_percent': form.value.alc_percent,
    'img_url': form.value.img_url
  };
    if(form.value.id == "" || form.value.id == null){
      return new Promise<any>((resolve, reject) => {
        this.firestore.collection('ital').add(data).then(res => resolve(this.toastr.success("Siker","ItalShop")),err => reject(this.toastr.error("Hiba", err)));
        this.resetForm(form);
      })
    }else{
      return new Promise<any>((resolve, reject) => {
        this.firestore.collection('ital').doc(form.value.id).update(data).then(res => resolve(this.toastr.success("Siker","ItalShop")),err => reject(this.toastr.error("Hiba", err)));
        this.resetForm(form);
      })
  }
}

}
export class AutocompleteSimpleExample {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}

