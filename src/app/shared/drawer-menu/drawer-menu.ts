import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Input,
  Output,
  signal,
} from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-drawer-menu',
  imports: [MaterialModule,CommonModule,RouterModule],
  templateUrl: './drawer-menu.html',
  styleUrl: './drawer-menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerMenu {
  @Input() isMobile = false;
  @Output() itemClicked = new EventEmitter<void>();

  subMenuOpen = signal<string | null>(null);

  toggleSubMenu(menu: string) {
    this.subMenuOpen.set(this.subMenuOpen() === menu ? null : menu);
  }

  handleItemClick() {
    if (this.isMobile) {
      this.itemClicked.emit();
    }
  }
}
