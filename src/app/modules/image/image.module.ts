import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListComponent } from './views/image-list/image-list.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from './components/table/table.module';
import { TranslateModule } from '@ngx-translate/core';
import { ImageRoutingModule } from './image-routing.module';


@NgModule({
  declarations: [
    ImageListComponent
  ],
  imports: [
    CommonModule,
    ImageRoutingModule,
    FormsModule,
    TableModule,
    TranslateModule
  ],
  exports: [ImageListComponent]
})
export class ImageModule { }
