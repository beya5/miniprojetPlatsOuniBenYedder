import { Component, Input,OnInit ,inject} from '@angular/core';
import { Tag } from '../../models/Tag';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent{
  @Input()
  foodPageTags?:string[];
  @Input()
  tags?:Tag[];

  
   
      


}
