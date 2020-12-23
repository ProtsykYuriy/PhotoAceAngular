import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchItemsService } from './services/fetch-items.service';



@NgModule({
  declarations: [
    ItemCardComponent,
    ItemsListComponent
  ],
  exports: [
    ItemCardComponent,
    ItemsListComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    FetchItemsService
  ]
})
export class ItemsModule { }
