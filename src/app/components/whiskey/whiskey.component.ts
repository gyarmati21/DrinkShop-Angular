import { ItemService } from './../shared/item.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Item } from '../shared/item.model';


@Component({
  selector: 'app-whiskey',
  templateUrl: './whiskey.component.html',
  styleUrls: ['./whiskey.component.scss']
})
export class WhiskeyComponent implements OnInit {

  Italok: Item[];

  user$ = this.authService.currentUser$;
  constructor(private authService: AuthenticationService,
    private breakpointObserver: BreakpointObserver,
    private service: ItemService) { }

    ngOnInit() {
      this.service.getWhiskey().subscribe(actionArray =>{
        this.Italok = actionArray.map(i =>{
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

}
