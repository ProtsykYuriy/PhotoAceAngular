import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

export interface Item {
  title: string;
  price: number;
  imgUrl: string;
}
 //https://picsum.photos/id/237/200/300
 //https://jsonplaceholder.typicode.com/photos/10;

@Injectable({
  providedIn: 'root'
})
export class FetchItemsService {
  public itemsUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor( private http: HttpClient) { }

  public getItems (){
    return this.http.get(this.itemsUrl).pipe(
      map((item:any) => item.slice(0,8).map(element=>{
        return {
          title : element.title,
          price : +element.url.replace(/[^0-9]/gi,'').slice(-4),
          imgUrl : 'https://picsum.photos/id/'+ Math.round(Math.random()*999),
        }
      })),
    )
  }
}
