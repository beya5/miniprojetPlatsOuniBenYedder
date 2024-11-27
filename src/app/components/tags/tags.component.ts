import { Component, Input,OnInit ,inject} from '@angular/core';
import { Tag } from '../../models/Tag';
import { FoodService } from '../../services/food.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit{
  @Input()
  foodPageTags?:string[];
  tags?:Tag[];

  private readonly foodService:FoodService=inject(FoodService);
  ngOnInit(): void {
    if(this.foodPageTags)
      this.foodService.getTags().subscribe(data => {
        console.log('Tags récupérés:',data);
        this.tags = data;
      });
      

}
}
