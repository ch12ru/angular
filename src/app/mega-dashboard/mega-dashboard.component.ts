import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mega-dashboard',
  templateUrl: './mega-dashboard.component.html',
  styleUrls: ['./mega-dashboard.component.css']
})
export class MegaDashboardComponent {

  constructor(private router: Router) {}
  getMatchDetails(matchId:String){
    this.router.navigate(['/prediction-details'], { queryParams: { matchId } });
  }

  cardconfig: SwiperOptions = {
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 10,
    autoplay:false, 
    slidesPerView: 3
  };

  cards = [
    {
      id:"match2",
      title: 'Card 1',
      date : '',
      imageUrl : 'https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg'
    },
    {
      id:"match3",
      title: 'CSK vs KKR',
      date : '',
      imageUrl :'https://wedigit.in/wp-content/uploads/2023/04/Merged_document.jpg'
      
    },
    
  ];
}
