import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/models/api';
import { TableColumn } from './models/table-column.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor() { }

  private _columns!: TableColumn[];
  private _rows!: Image[];
  private _inc = 10;
  private _currentIdx = 0;
  
  private _filterText!: string;
  private _filteredRows!: Image[];

  displayedColumns: string[] = [];
  visibleRows!: Image[];
  totalRows = 0;

  @Input()
  get columns(): TableColumn[] {
    return this._columns;
  }
  set columns(value: TableColumn[]) {
    this._columns = value;
    this.displayedColumns = this.columns.map(col => col.field); 
  }

  @Input()
  get rows(): any[] {
    return this._rows;
  }
  set rows(value: any[]) {
    this.totalRows = value?.length ? value.length : 0;
    this._rows = value;
    this.visibleRows = value?.slice(this._currentIdx, this._inc);
    this._currentIdx = this._inc;
  }

  @Input()
  get filterText(): string {
    return this._filterText;
  }
  set filterText(value: string) {
    this._filterText = value;
    this._currentIdx = 0;
    
    if(this.filterText) {
      this._filteredRows = this.rows.filter(row => row['id'].includes(this.filterText) || row['text'].includes(this.filterText));
      this.visibleRows = this._filteredRows.slice(this._currentIdx, this._inc);
      this._currentIdx = this._filteredRows.length > this._inc ? this._inc : this._filteredRows.length;
    } else {
      this.visibleRows = this.rows?.slice(this._currentIdx, this._inc);
      this._currentIdx = this._inc;
    }

    this.totalRows = this.filterText ? this._filteredRows.length : this.rows?.length;
  }

  trackBy(index: number, item: Image): string {
    return item.id;
  }
  
  onScroll() {
    const addRows = [];
    const totalRowsLength = this.filterText ? this._filteredRows.length : this.rows.length;
    if(this.visibleRows.length + this._inc <= totalRowsLength) {
      for(let i = 0; i < this._inc; i++) {
        addRows.push(this.rows[(this._currentIdx + i)]);
      }
      this._currentIdx += this._inc;
      this.visibleRows = this.visibleRows.concat(addRows);
    }
  }
}
