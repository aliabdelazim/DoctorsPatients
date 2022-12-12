import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  @Input() title = 'Not Found';
  @Input() subTitle = '';
  @Input() icon: string | undefined;
  @Input() retry = false;
  @Output() onRetry: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
