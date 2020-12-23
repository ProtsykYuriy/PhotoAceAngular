import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Input() public itemTitle: string;
  @Input() public itemPrice: number;
  @Input() public imageSource: string;

  constructor() {}

  ngOnInit(): void {}
}
