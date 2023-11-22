import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 4;
  width: number = 90;

  ngOnInit(): void {
    this.width = (this.rating * 90) / 5;
  }
}
