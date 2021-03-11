import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any[];

  constructor() {
    this.items=[
      {title: "Nasi Goreng Biasa"},
      {title: "Nasi Kandar"},
      {title: "Nasi Lemak"},
      {title: "Milo Ais"},
      {title: "Sirap Bandung"},
      {title: "Udang Tepung"},
      {title: "Udang Kunyit"},
    ];
   }

   filterItems(searchTerm){
     return this.items.filter(item =>{
       return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >-1;
     });
   }
}
