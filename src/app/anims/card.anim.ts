import { trigger, state, transition, style, animate, keyframes } from '@angular/animations'

export const cardAnim = trigger('card', [
  state('out', style({transform: 'scale(1)', 'box-shadow': 'none'})),
  state('hover', style({transform: 'scale(1.03)', 'box-shadow': '1.5px 1.5px 3px 3.5px #ccc'})),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out'))
])
