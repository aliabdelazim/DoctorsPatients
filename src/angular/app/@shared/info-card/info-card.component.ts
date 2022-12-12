import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {
  @Input() title = '';
  @Input() items: { [key: string]: string | number | string[] } = {};
  @Input() isEdit = false;
  @Input() loadingCount = 3;
  @Input() isLoading = false;
  @Input() editUrl = '';
  loading: { key: ''; value: '' }[] = [];
  constructor() {}

  ngOnInit(): void {}

  generateLoaders() {
    for (let index = 0; index < this.loadingCount; index++) {
      this.loading.push({ key: '', value: '' });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setLoading();
  }

  setLoading() {
    if (!this.isLoading) this.loading = [];
    else this.generateLoaders();
  }
}
