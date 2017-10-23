/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu.component';
import { Blank_TabletLandscape } from '../pages/Blank/TabletLandscape/Blank';
import { Flower_Login_TabletLandscape } from '../pages/Flower/Login/TabletLandscape/Login';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Blank_TabletLandscape,
    Flower_Login_TabletLandscape
  ];
  static mapping = {
    'Blank': {
      TabletLandscape: Blank_TabletLandscape
    },
    'Flower_Login': {
      TabletLandscape: Flower_Login_TabletLandscape
    }
  }
}