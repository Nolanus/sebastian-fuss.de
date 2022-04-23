import { Component, OnInit } from '@angular/core';
import { NgxCookiebotService } from "@halloverden/ngx-cookiebot";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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
  ]

  constructor(private _cookieBotService: NgxCookiebotService) {
  }

  ngOnInit(): void {
  }

  public showCookieBanner(event: Event) {
    event.preventDefault();
    this._cookieBotService.cookiebot.renew();
  }

}
