import { Component } from '@angular/core';
import { AppLayoutComponent } from '../app-layout/app-layout/app-layout.component';
import { SettingService } from 'src/app/component/settings/setting.service';
import { UserTypeEnum } from '../common/enum/user-type';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {
  globalSetting: any;
  image: any;

    constructor(private auth: AuthenticationService, private loadingService : NgxSpinnerService,private settingService: SettingService,public app: AppLayoutComponent) {}

    ngOnInit() {
      this.getFileUpload()
 }

 getFileUpload() {
   this.loadingService.show();
  this.settingService.getGlobalSetting().subscribe((result: any) => {
    if (result.success == true) {
      this.image = result.response[0].barLogoData;
      this.loadingService.hide();
    }
  },
    error => { })
    this.loadingService.hide();
}

logout(){
  this.auth.logout();
}

}
