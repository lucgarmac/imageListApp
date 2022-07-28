import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  constructor(private _translateService: TranslateService) { }

  menu = [
    {label: 'MENU.IMAGE', url: '/'}
  ];

  options = [
    {id: 'es', label: 'LANGUAGE.ES'},
    {id: 'en', label: 'LANGUAGE.EN'}
  ];

  optionSelected: string = 'es';

  onChangeLanguage(value: string) {
    this.optionSelected = value;
    this._translateService.setDefaultLang(value);
    this._translateService.use(value);
  }
}
