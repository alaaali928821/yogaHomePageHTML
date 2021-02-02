import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
@Input() progressLabel: string = 'Sleep';
@Input() progressValue: number = 85;
@Input() progressMAX: number = 100;
constructor() { }

  ngOnInit(): void {
  }

}
