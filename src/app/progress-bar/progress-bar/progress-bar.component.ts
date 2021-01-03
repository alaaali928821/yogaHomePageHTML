import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
@Input() progressBar: number = 50;
  progressBarprogress: string;
  constructor() { }

  ngOnInit(): void {
    this.progressBarprogress = 'width:' + this.progressBar +'%'
  }

}
