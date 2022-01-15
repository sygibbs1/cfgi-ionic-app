import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Pagination, Autoplay} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public swiperConfig: SwiperOptions = {
    autoplay: {delay: 0},
    speed: 2000,
  }
  constructor() {}

  ngOnInit() {
    Swiper.use([Autoplay])
  }
}

