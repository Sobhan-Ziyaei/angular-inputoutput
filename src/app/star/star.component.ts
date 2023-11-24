import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnInit {
  @Input() rating: number = 4;
  @Output() starClicked = new EventEmitter<number>();
  width: number = 90;

  ngOnInit(): void {
    this.width = (this.rating * 90) / 5;
  }

  onStarClicked() {
    this.starClicked.emit(this.rating);
  }
}
