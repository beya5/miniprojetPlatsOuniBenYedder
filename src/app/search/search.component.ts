import { Component ,inject} from '@angular/core';
import { ActivatedRoute,Router   } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
searchTerm:String="";
 router:Router=inject(Router);

search():void{
if(this.searchTerm)
  console.log('Search term:', this.searchTerm); 
  this.router.navigate(['/home', this.searchTerm]);
}
}
