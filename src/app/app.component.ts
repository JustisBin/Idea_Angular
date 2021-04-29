import { Component, HostBinding } from '@angular/core';
import { fadeInAnimation } from './animations'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeInAnimation
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  title = 'Idea_platform_clone';

  hidden = 'none'

  openNav() {
    this.hidden = 'block'
  }

  closeNav() {
    this.hidden = 'none'
  }
}