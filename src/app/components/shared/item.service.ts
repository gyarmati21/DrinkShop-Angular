import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  formData :Item;

  constructor(private firestore: AngularFirestore){}


  getItems(){
   return this.firestore.collection('ital').snapshotChanges();
  }

  getBorok(){
    return this.firestore.collection('ital',ref => ref.where("type", "==", "Bor").orderBy("price","asc")).snapshotChanges();
  }

  getVodka(){
    return this.firestore.collection('ital',ref => ref.where("type", "==", "Vodka").orderBy("price","asc")).snapshotChanges();
  }

  getWhiskey(){
    return this.firestore.collection('ital',ref => ref.where("type", "==", "Whiskey").orderBy("price","asc")).snapshotChanges();
  }

  getPalinka(){
    return this.firestore.collection('ital',ref => ref.where("type", "==", "Pálinka").orderBy("price","asc")).snapshotChanges();
  }
}