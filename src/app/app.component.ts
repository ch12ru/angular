import { Component,OnInit} from '@angular/core';

import { Router } from '@angular/router';
interface Image {
  src: string;
  alt: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  constructor(private router: Router) {
    this.router.navigate(['/mega-dashboard']);
  }
  ngOnInit(): void {
    this.router.navigate(['/mega-dashboard']);
  }
  title = 'mindoot';
  
}
