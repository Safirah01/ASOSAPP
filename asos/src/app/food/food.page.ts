import { Component, OnInit } from '@angular/core';
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {
  public searchTerm: string="";
  public items: any;
  constructor(private dataService: DataService) { }

  ngOnInit() {this.setFilteredItems();
  }

  setFilteredItems(){
    this.items = this.dataService.filterItems(this.searchTerm);
  }

}
