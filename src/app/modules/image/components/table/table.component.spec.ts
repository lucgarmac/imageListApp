import { CdkTableModule } from '@angular/cdk/table';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Image } from '../../../../models/api';
import { TableColumn } from './models/table-column.interface';
import { TableComponent } from './table.component';


describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  const columnsMock: TableColumn[] = [
    {
      id: 1,
      field: 'photo',
      label: 'Foto',
      type: 'image'
    },
    {
      id: 2,
      field: 'text',
      label: 'Texto',
      type: 'data'
    }
  ];

  const rowsMock: Image[] = [
    {id: '01', photo: 'https://i.picsum.photos/id/1/500/500.jpg', text: 'cupidatat occaecat dolor consectetur ex'},
    {id: '02', photo: 'https://i.picsum.photos/id/2/500/500.jpg', text: 'veniam cillum qui enim incididunt'},
    {id: '03', photo: 'https://i.picsum.photos/id/3/500/500.jpg', text: 'nisi quis eu dolor anim'},
    {id: '04', photo: 'https://i.picsum.photos/id/4/500/500.jpg', text: 'officia veniam in minim velit'},
    {id: '05', photo: 'https://i.picsum.photos/id/5/500/500.jpg', text: 'non nulla enim minim officia'},
    {id: '06', photo: 'https://i.picsum.photos/id/6/500/500.jpg', text: 'eiusmod nulla nisi proident laboris'},
    {id: '07', photo: 'https://i.picsum.photos/id/7/500/500.jpg', text: 'non mollit do pariatur sint'},
    {id: '08', photo: 'https://i.picsum.photos/id/8/500/500.jpg', text: 'laborum reprehenderit sint eu voluptate'},
    {id: '09', photo: 'https://i.picsum.photos/id/9/500/500.jpg', text: 'proident voluptate consequat duis ex'},
    {id: '10', photo: 'https://i.picsum.photos/id/10/500/500.jpg', text: 'id deserunt incididunt consequat esse'},
    {id: '11', photo: 'https://i.picsum.photos/id/11/500/500.jpg', text: 'fugiat sit elit aute consequat'},
    {id: '12', photo: 'https://i.picsum.photos/id/12/500/500.jpg', text: 'do nulla duis deserunt ut'},
    {id: '13', photo: 'https://i.picsum.photos/id/13/500/500.jpg', text: 'anim dolor id eu enim'},
    {id: '14', photo: 'https://i.picsum.photos/id/14/500/500.jpg', text: 'labore cupidatat ea exercitation eiusmod'},
    {id: '15', photo: 'https://i.picsum.photos/id/15/500/500.jpg', text: 'cupidatat adipisicing incididunt officia ullamco'},
    {id: '16', photo: 'https://i.picsum.photos/id/16/500/500.jpg', text: 'id amet nostrud qui pariatur'},
    {id: '17', photo: 'https://i.picsum.photos/id/17/500/500.jpg', text: 'sit in proident aliqua duis'},
    {id: '18', photo: 'https://i.picsum.photos/id/18/500/500.jpg', text: 'adipisicing enim quis et laboris'},
    {id: '19', photo: 'https://i.picsum.photos/id/19/500/500.jpg', text: 'id id voluptate velit veniam'},
    {id: '20', photo: 'https://i.picsum.photos/id/20/500/500.jpg', text: 'sit sint ullamco veniam aute'},
    {id: '21', photo: 'https://i.picsum.photos/id/21/500/500.jpg', text: 'excepteur consectetur pariatur eu eiusmod'},
    {id: '22', photo: 'https://i.picsum.photos/id/22/500/500.jpg', text: 'eiusmod ipsum adipisicing nulla et'},
    {id: '23', photo: 'https://i.picsum.photos/id/23/500/500.jpg', text: 'consequat tempor est adipisicing anim'},
    {id: '24', photo: 'https://i.picsum.photos/id/24/500/500.jpg', text: 'eiusmod adipisicing ex culpa ut'},
    {id: '25', photo: 'https://i.picsum.photos/id/25/500/500.jpg', text: 'ut eu tempor qui in'},
    {id: '26', photo: 'https://i.picsum.photos/id/26/500/500.jpg', text: 'amet enim ad est incididunt'},
    {id: '27', photo: 'https://i.picsum.photos/id/27/500/500.jpg', text: 'laboris nisi qui dolor labore'},
    {id: '28', photo: 'https://i.picsum.photos/id/28/500/500.jpg', text: 'ex excepteur do reprehenderit ad'},
    {id: '29', photo: 'https://i.picsum.photos/id/29/500/500.jpg', text: 'ea nulla elit ipsum ullamco'},
    {id: '30', photo: 'https://i.picsum.photos/id/30/500/500.jpg', text: 'nulla sunt do ut id'},
    {id: '31', photo: 'https://i.picsum.photos/id/31/500/500.jpg', text: 'irure minim nostrud eu do'},
    {id: '33', photo: 'https://i.picsum.photos/id/33/500/500.jpg', text: 'eu adipisicing et minim cillum'},
    {id: '34', photo: 'https://i.picsum.photos/id/34/500/500.jpg', text: 'do voluptate nulla laboris nostrud'},
    {id: '35', photo: 'https://i.picsum.photos/id/35/500/500.jpg', text: 'velit enim consectetur officia consequat'},
    {id: '36', photo: 'https://i.picsum.photos/id/36/500/500.jpg', text: 'ut ea consequat commodo do'},
    {id: '37', photo: 'https://i.picsum.photos/id/37/500/500.jpg', text: 'proident quis fugiat do ad'},
    {id: '38', photo: 'https://i.picsum.photos/id/38/500/500.jpg', text: 'sit ullamco ea voluptate ad'},
    {id: '39', photo: 'https://i.picsum.photos/id/39/500/500.jpg', text: 'id magna id ut do'},
    {id: '40', photo: 'https://i.picsum.photos/id/40/500/500.jpg', text: 'irure aliquip duis non mollit'}
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        CdkTableModule,
        InfiniteScrollModule,
        TranslateModule.forRoot()
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.columns = columnsMock;
    component.rows = rowsMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('update rows when filter by id', () => {
    component.filterText = '01';
    expect(component.visibleRows.length).toBe(1);
    expect(component.totalRows).toBe(1);
  });

  it('return id when trackBy is invoked', () => {
    const result = component.trackBy(0,rowsMock[0]);
    expect(result).toBe('01');
  })

  describe('show more items when scrolling', () => {
    
    it('there isn\'t a filter text', () => {
      component.filterText = '';
      component.onScroll();
      expect(component.visibleRows.length).toBe(20);
    });

    it('there is a filter text', () => {
      component.filterText = '01';
      component.onScroll();
      expect(component.visibleRows.length).toBe(1);
    });
  })
 
});
