import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-card',
  templateUrl: './count-card.component.html',
  styleUrls: ['./count-card.component.scss'],
})
export class CountCardComponent implements OnInit {
  @Input() title = '';
  @Input() count = 0;
  @Input() icon = '';
  @Input() isLoading = false;

  constructor() {}

  ngOnInit(): void {}
}
