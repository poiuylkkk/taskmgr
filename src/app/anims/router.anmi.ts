import { trigger, state, transition, style, animate, keyframes, group } from '@angular/animations'

export const slideToRight = trigger('routeAnim', [
  state('void', style({'position': 'fixed', 'width': '100%', 'height': '80%'})),
  state('*', style({'position': 'fixed', 'width': '100%', 'height': '80%'})),
  transition('void => *', [
    style({transform: 'translateX(-100%)', opacity: 0}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(0)'})),
      animate('.7s ease-in', style({opacity: 1}))
    ])
  ]),
  transition('* => void', [
    style({transform: 'translateX(0)', opacity: 1}),
    group([
      animate('.5s ease-in-out', style({transform: 'translateX(100%)'})),
      animate('.3s ease-in', style({opacity: 0}))
    ])
  ]),
])
