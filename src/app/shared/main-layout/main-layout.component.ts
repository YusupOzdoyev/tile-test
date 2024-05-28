import { Component, OnInit } from '@angular/core';
import { HeaderNavComponent } from '../components/header-nav/header-nav.component';
import { INotifications } from '../interfaces';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderNavComponent],
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  notifications: INotifications[] = new Array(18);

  constructor() { }

  ngOnInit(): void {
  }

}
