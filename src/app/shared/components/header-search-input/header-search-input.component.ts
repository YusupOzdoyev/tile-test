import { Component, OnInit } from '@angular/core';

import { inputAnimation } from '../../animations';
import { HeaderSearchInputService } from '../../header-search-input.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-search-input.component.html',
  styleUrls: ['./header-search-input.component.scss'],
  animations: [ inputAnimation ],
  host: { '[@fadeInOut]': 'in' }
})
export class HeaderSearchInputComponent implements OnInit {

  inputField = '';

  constructor(
    public searchS: HeaderSearchInputService
  ) { }

  ngOnInit(): void {
  }

}
