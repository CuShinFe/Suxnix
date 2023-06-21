import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent {
  text1 = [
    'About Company',
    'Affiliate Program',
    'Customer Spotlight',
    'Reseller Program',
    'Our Shop',
    'Price & Plans',
  ];

  text2 = ['Knowledge Base', 'Blog', 'Developer API', 'FAQ', 'Team', 'Contact'];

  list = [
    {
      icon: 'las la-phone -scale-x-100',
      text3: '+1 31-6555-0116',
    },
    {
      icon: 'las la-envelope',
      text3: 'Suxnix@example.com',
    },
    {
      icon: 'las la-globe-americas',
      text3: 'www.suxnixdomain.com',
    },
  ];

  icons = [
    'lab la-facebook-f',
    'lab la-twitter',
    'lab la-pinterest-p',
    'lab la-linkedin-in',
  ];

  list2 = [
    {
      h3: 'about us',
      texts: [
        { text: 'About Company' },
        { text: 'Affiliate Program' },
        { text: 'Customer Spotlight' },
        { text: 'Reseller Program' },
        { text: 'Our Shop' },
        { text: 'Price & Plans' },
      ],
    },

    {
      h3: 'support',
      texts: [
        { text: 'Knowledge Base' },
        { text: 'Blog' },
        { text: 'Developer API' },
        { text: 'FAQ' },
        { text: 'Team' },
        { text: 'Contact' },
      ],
    },
  ];

  images = [
    {
      image: './assets/images/footer/instagram_post01.jpg',
      style: 4,
    },
    {
      image: './assets/images/footer/instagram_post02.jpg',
      style: 4,
    },
    {
      image: './assets/images/footer/instagram_post03.jpg',
      style: 3,
    },
    {
      image: './assets/images/footer/instagram_post04.jpg',
      style: 2,
    },
    {
      image: './assets/images/footer/instagram_post05.jpg',
      style: 1,
    },
  ];
}
