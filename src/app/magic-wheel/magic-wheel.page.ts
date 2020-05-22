import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-magic-wheel',
  templateUrl: './magic-wheel.page.html',
  styleUrls: ['./magic-wheel.page.scss'],
})
export class MagicWheelPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myfunction() {
    const x = 1024;
    const y = 9999;
    const deg = Math.floor(Math.random() * (x - y)) + y;
    document.getElementById('box').style.transform = 'rotate(' + deg + 'deg)';
    const element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(() => {
      element.classList.add('animate');
    }, 5000);
  }

}
