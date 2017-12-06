import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InboxPage } from '../pages/inbox/inbox';
import { EnviadosPage } from '../pages/enviados/enviados';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = InboxPage;
  inbox = InboxPage;
  sends = EnviadosPage;
  notReadInbox = 18;
  @ViewChild('sidebar') menu: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goPage(page: any) {
    this.menu.setRoot(page);
    this.menuCtrl.close();
  }

}

