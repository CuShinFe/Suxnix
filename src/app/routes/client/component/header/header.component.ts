import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  
  menu = [
    {list: 'Home', link: '/'},
    {list: 'Features', link: '/'},
    {list: 'Product', link: '/'},
    {list: 'Ingrendient', link: '/'},
    {list: 'Pricing', link: '/'},
    {list: 'Shop', link: '/'},
    {list: 'News', link: '/'},
    {list: 'Contacts', link: '/'},
  ]
  
}
