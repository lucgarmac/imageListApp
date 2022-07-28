import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private _translateService: TranslateService) {
    this._setDefaultLang();
  }

  defaultLang = 'es';

  private _setDefaultLang() {
    this._translateService.setDefaultLang(this.defaultLang);
    this._translateService.use(this.defaultLang);
  }
}
