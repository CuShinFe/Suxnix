import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  images = [
    {
      image: './assets/images/home/banner/banner_shape03.png',
      style: 1,
    },

    {
      image: './assets/images/home/banner/banner_img01.png',
      style: 2,
    },

    {
      image: './assets/images/home/banner/banner_shape04.png',
      style: 3,
    },
  ];
  slider = [
    './assets/images/home/brand/brand_01.png',
    './assets/images/home/brand/brand_02.png',
    './assets/images/home/brand/brand_03.png',
    './assets/images/home/brand/brand_04.png',
    './assets/images/home/brand/brand_05.png',
    './assets/images/home/brand/brand_06.png',
  ];

  // test
  section2 = [
    {
      img: './assets/images/home/banner/banner_shape03.png',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aspernatur placeat dicta eius nam ullam ut libero nostrum. Sunt nam ad harum quia repellendus iure, nobis eligendi animi quae architecto.',
      number: 1,
    },

    {
      img: './assets/images/home/banner/banner_img01.png',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aspernatur placeat dicta eius nam ullam ut libero nostrum. Sunt nam ad harum quia repellendus iure, nobis eligendi animi quae architecto.',
      number: 2,
    },

    {
      img: './assets/images/home/banner/banner_shape04.png',
      paragraph:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita aspernatur placeat dicta eius nam ullam ut libero nostrum. Sunt nam ad harum quia repellendus iure, nobis eligendi animi quae architecto.',
      number: 1,
    },
  ];

  listicon = [
    {
      icon: 'las la-apple-alt',
      h4: 'MULTI FRUITS FLAVOUR',
      text: 'A thing added to something else in order to complete or enhance it.',
    },
    {
      icon: 'las la-flask',
      h4: 'FLOWER FORMULA',
      text: 'A thing added to something else in order to complete or enhance it.',
    },
    {
      icon: 'las la-weight-hanging',
      h4: 'FISHBONE DIAGRAM',
      text: 'A thing added to something else in order to complete or enhance it.',
    },
    {
      icon: 'las la-user-alt',
      h4: '100% FAT BLASTING',
      text: 'A thing added to something else in order to complete or enhance it.',
    },
  ];

  section3 = [
    {
      style: 1,
      img1: './assets/images/home/products/features_product01.png',
      img2: './assets/images/home/products/features_product_shape01.png',
      name: 'SERIOUR MASS',
      information:
        'Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue,and muscle weakness. Over time, vitamin D deficiency can lead to weakbones, rickets in children, and osteoporosis in adults.',
      price: '$89.99',
      oldprice: '$117.99',
    },
    {
      style: 2,
      img1: './assets/images/home/products/features_product02.png',
      img2: './assets/images/home/products/features_product_shape02.png',
      name: 'PROTEIN WHEY',
      information:
        'Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue,and muscle weakness. Over time, vitamin D deficiency can lead to weakbones, rickets in children, and osteoporosis in adults.',
      price: '$59.99',
      oldprice: ' $79.99',
    },
    {
      style: 1,
      img1: './assets/images/home/products/features_product03.png',
      img2: './assets/images/home/products/features_product_shape03.png',
      name: 'MAX MASS 3XL',
      information:
        'Vitamin D3 supplements are commonly recommended for people at risk for vitamin D deficiency. Low vitamin D levels cause depression, fatigue,and muscle weakness. Over time, vitamin D deficiency can lead to weakbones, rickets in children, and osteoporosis in adults.',
      price: '$69.99 ',
      oldprice: '$89.99',
    },
  ];

  slider3 = [
    {
      img: './assets/images/home/products/home_shop_thumb01.png',
      bg: 'bg-lime-500',
      h5: '',
      rating: '30',
      text: '',
    },
    {
      img: './assets/images/home/products/home_shop_thumb02.png',
      bg: 'bg-yellow-400',
      h5: '',
      rating: '30',
      text: '',
    },
    {
      img: './assets/images/home/products/home_shop_thumb03.png',
      bg: 'bg-violet-500',
      h5: '',
      rating: '24',
      text: '',
    },
    {
      img: './assets/images/home/products/home_shop_thumb04.png',
      bg: 'bg-slate-300',
      h5: '',
      rating: '24',
      text: '',
    },
    {
      img: './assets/images/home/products/home_shop_thumb05.png',
      bg: 'bg-blue-500',
      h5: '',
      rating: '12',
      text: '',
    },
  ];

  starIcon = [
    'las la-star',
    'las la-star',
    'las la-star',
    'las la-star',
    'las la-star-half-alt',
  ];

  section7 = [
    {
      tag: 'casual',
      style: 1,
      number: '1',
      bottle: '1 X 250 Veggie Caps Bottle',
      price: '$69',
      total: '$69',
      save: '14%',
    },
    {
      tag: 'most popular',
      style: 2,
      number: '3',
      price: '$59',
      total: '$179',
      save: '25%',
    },
    {
      tag: 'best value',
      style: 2,
      number: '6',
      bottle: '6 X 250 Veggie Caps Bottle',
      price: '$49',
      total: '$299',
      save: '40%',
    },
  ];
}
