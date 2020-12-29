import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
@Input() cardTitle: string;
@Input() cardSubTitle: string;
@Input() imgSrc: string;
  ngOnInit(): void {
  }

}
