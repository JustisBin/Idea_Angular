import {
  animation, trigger, animateChild, group,
  transition, animate, style, query
} from '@angular/animations';

// Routable animations
export const fadeInAnimation =
  trigger("fade", [
    transition("* <=> *", [
      style({ opacity: 0.7 }),
      animate(400, style({ opacity: 1 }))
    ])
  ]);