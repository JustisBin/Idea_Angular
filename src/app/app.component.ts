import { Component, HostBinding } from '@angular/core';
import { slideInAnimation } from './animations'
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  @HostBinding('@.disabled')
  public animationsDisabled = false;

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  title = 'Idea_platform_clone';

  openNav() {
    console.log('asdf');
    document.getElementById("mySidenav");
  }

  closeNav() {
    document.getElementById("mySidenav");
  }
}