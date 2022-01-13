import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Pagination} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public swiperConfig: SwiperOptions = {
    pagination: true
  }
  constructor() {}

  ngOnInit() {
    Swiper.use([Pagination])
  }
}

