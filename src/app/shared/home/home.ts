import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MaterialModule } from '../../ui/material-module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModule, CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  modules = [
    {
      title: 'Admins',
      description: 'This is the module for admins.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/admin/admins',
    },
    {
      title: 'Users',
      description: 'This is the module for users.',
      traits: ['fluffy', 'alert', 'intelligent'],
      route: '/dashboard/user/users',
    },
    {
      title: 'Editors',
      description: 'This is the module for editors.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/editor/editors',
    },
    {
      title: 'Viewers',
      description: 'This is the module for viewers.',
      traits: ['fluffy', 'alert', 'intelligent'],
      route: '/dashboard/viewer/viewers',
    },
    {
      title: 'Cars',
      description: 'This is the module for cars.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/car/cars',
    },
    {
      title: 'Articles',
      description: 'This is the module for articles.',
      traits: ['fluffy', 'alert', 'intelligent'],
      route: '/dashboard/article/articles',
    },
  ];
}
