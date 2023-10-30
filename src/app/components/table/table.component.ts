import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Observable } from 'rxjs';

export type HeaderColumn = {
  key: string;
  header: string;
};

@Component({
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data!: any[];
  @Input() httpRequestCB!: Observable<unknown>;
  @Input() cols!: HeaderColumn[];

  @Output() addEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.reciveData();
  }

  reciveData() {
    this.httpRequestCB.subscribe({
      next: data => {
        this.data = data as any[];
      },
      error: err => {
        console.log(err);
      }
    });
  }

  addButton() {
    this.addEvent.emit(true);
  }

}
