import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchItemsService, Item } from '../services/fetch-items.service';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  public fetchedItems$: Observable <Item[]>;

  constructor(public fetchItemsService: FetchItemsService) { }

  ngOnInit(): void {
    this.fetchedItems$ =this.fetchItemsService.getItems()
  }
}
