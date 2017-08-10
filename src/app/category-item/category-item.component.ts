import { Component ,OnInit,Input} from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Categoria }  from '../../pages/listing/listing.model';
import { FeedPage } from '../../pages/feed/feed';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
//  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent  {

@Input() categoria: Categoria;
  constructor(
    public nav: NavController,
  ) {
    
   }

  

   

  goToFeed(category: any) {
    console.log("Clicked goToFeed", category);
    this.nav.push(FeedPage, { category: category });
  }

}
