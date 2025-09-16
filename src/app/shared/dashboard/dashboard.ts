import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { SettingsMenu } from '../settings-menu/settings-menu';
import { RouterOutlet } from '@angular/router';
import { DrawerMenu } from '../drawer-menu/drawer-menu';
import { MatDrawer } from '@angular/material/sidenav';
import { ScreenSize } from '../../services/screen-size';
import { ThemeSelector } from "../theme-selector/theme-selector";
@Component({
  selector: 'app-dashboard',
  imports: [MaterialModule, SettingsMenu, RouterOutlet, DrawerMenu, ThemeSelector],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  @ViewChild('drawer') drawer!: MatDrawer;
  private readonly screenSizeService = inject(ScreenSize);

  isMobile = this.screenSizeService.isMobile;

  onNavigate() {
    if (this.isMobile()) {
      this.drawer.close();
    }
  }
}
