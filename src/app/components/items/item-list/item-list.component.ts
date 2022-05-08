import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from './../../shared/item.model';
import { map } from 'rxjs/operators';
import { ItemService } from './../../shared/item.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
  
})
export class ItemListComponent implements OnInit {

  list: Item[];
  constructor(private service: ItemService,
    private firestore: AngularFirestore,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getItems().subscribe(actionArray =>{
      this.list = actionArray.map(i =>{
        const data = i.payload.doc.data() as Item;
        return {
          id: i.payload.doc.id,
          fullName: data.fullName,
          price: data.price,
          type: data.type,
          alc_percent: data.alc_percent,
          img_url: data.img_url
        } as Item;
      })
    });
  }
  onEdit(emp:Item){
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id:string){
    if(confirm("Biztosan le akarod törölni ezt a rekordot?")){
        this.firestore.doc('ital/'+id).delete();
        this.toastr.success('Sikeresen törölve!', 'DrinkShop')
    }
  }
}
