import {
  Component,
  ComponentFactoryResolver,
  ComponentRef, ElementRef, HostListener,
  OnInit,
  ViewChild
} from '@angular/core';

import { IMenuItem } from '../../interfaces';
import { HeaderSearchInputComponent } from '../header-search-input/header-search-input.component';
import { RefDirective } from '../../ref.directive';
import { HeaderSearchInputService } from '../../header-search-input.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
  providers: [HeaderSearchInputService]
})
export class HeaderNavComponent implements OnInit {

  @ViewChild('addIcon', { static: false })
  addIconRef!: ElementRef;
  @ViewChild('headerNav', { static: false })
  headerNavRef!: ElementRef;
  @ViewChild(RefDirective, { static: false })
  searchInputRef!: RefDirective;

  componentRef!: ComponentRef<any>;
  sortItems: string[] = ['дате', 'алфавиту']
  checkBoxItems: string[] = ['я участник', 'в заголовке', 'строгий поиск']

  menu: IMenuItem[] = [
    {id: 0, label: 'ссылки', isSubMenu: true},
    {id: 1, label: 'контакты', isSubMenu: false},
    {id: 2, label: 'теги', isSubMenu: true},
    {id: 3, label: 'просьбы', isSubMenu: true},
    {id: 4, label: 'избранное', isSubMenu: true},
    {id: 5, label: 'посещения', isSubMenu: true},
  ];

  isHeaderInputShown = false;

  constructor(
    private resolver: ComponentFactoryResolver,
    public searchS: HeaderSearchInputService
  ) { }

  ngOnInit(): void {
  }

  showInput() {
    if (this.isHeaderInputShown) {
      this.searchInputRef.containerRef.clear();
      this.isHeaderInputShown = false;
    } else {
      const searchInputFactory = this.resolver.resolveComponentFactory(HeaderSearchInputComponent);
      this.componentRef = this.searchInputRef.containerRef.createComponent(searchInputFactory);

      this.isHeaderInputShown = true;
    }
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    if (!this.isHeaderInputShown) return;

    const clickedInside = this.headerNavRef.nativeElement.contains(target);
    const addIcon = this.addIconRef.nativeElement.contains(target)
    if (!clickedInside || addIcon) {
      this.searchInputRef.containerRef.clear();
      this.searchS.changeInputState(false)
      this.isHeaderInputShown = false;
    }
  }
}
