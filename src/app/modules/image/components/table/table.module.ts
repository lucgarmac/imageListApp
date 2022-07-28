import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { TableComponent } from './table.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CdkTableModule,
    InfiniteScrollModule
  ],
  exports: [TableComponent]
})
export class TableModule { }
