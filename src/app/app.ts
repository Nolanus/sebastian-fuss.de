import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { NgxCookiebotService } from '@halloverden/ngx-cookiebot';
import { NgxPageScrollModule } from 'ngx-page-scroll';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, NgxPageScrollModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private readonly _cookieBotService = inject(NgxCookiebotService);

  public social = [
    {
      'link': 'https://www.linkedin.com/in/sebastian-fuss/',
      'iconClasses': ['fab', 'fa-linkedin-in'],
      'title': 'LinkedIn'
    },
    {
      'link': 'https://github.com/Nolanus',
      'iconClasses': ['fab', 'fa-github'],
      'title': 'GitHub'
    },
    {
      'link': 'https://www.facebook.com/sebastian.fuss',
      'iconClasses': ['fab', 'fa-facebook-f'],
      'title': 'Facebook'
    },
    {
      'link': 'https://my.flightradar24.com/Nolanus',
      'iconClasses': ['fas', 'fa-plane-departure'],
      'title': 'myFlightradar24'
    },
  ];

  ngOnInit(): void {
  }

  public showCookieBanner(event: Event) {
    event.preventDefault();
    this._cookieBotService.cookiebot.renew();
  }
}
