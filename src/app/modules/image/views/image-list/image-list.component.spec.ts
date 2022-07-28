import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Image } from '../../../../models/api';
import { TableModule } from '../../components/table/table.module';
import { ImageService } from '../../services/image.service';

import { ImageListComponent } from './image-list.component';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  const rowsMock: Image[] = [
    {
      id: '1',
      photo: 'https://i.picsum.photos/id/1/500/500.jpg',
      text: 'Image 01'
    },
    {
      id: '2',
      photo: 'https://i.picsum.photos/id/1/500/500.jpg',
      text: 'Image 02'
    },
    {
      id: '3',
      photo: 'https://i.picsum.photos/id/1/500/500.jpg',
      text: 'Image 03'
    }
  ];
  
  const imageServiceSpy: jasmine.SpyObj<ImageService> = jasmine.createSpyObj<ImageService>('ImageService', ['getImages']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageListComponent ],
      imports: [
        FormsModule,
        TableModule,
        TranslateModule.forRoot()
      ],
      providers: [
        {provide: ImageService, useValue: imageServiceSpy}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    imageServiceSpy.getImages.and.returnValue(rowsMock);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
