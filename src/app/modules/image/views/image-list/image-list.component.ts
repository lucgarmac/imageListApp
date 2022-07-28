import { Component, OnInit } from '@angular/core';
import { TableColumn } from '../../components/table/models/table-column.interface';
import { Image } from '../../../../models/api';
import { ImageService } from '../../services/image.service';
import { getTableColumns } from './config/image-list.config';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements OnInit {

  constructor(private _imageService: ImageService) { }

  inputFilter: string = '';
  columns: TableColumn[] = [];
  rows: Image[] = [];


  ngOnInit(): void {
    this.columns = getTableColumns();
    this.rows = this._imageService.getImages();
  }

}
