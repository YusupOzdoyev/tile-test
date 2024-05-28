import { animate, style, transition, trigger } from '@angular/animations';

export const inputAnimation = trigger(
  'fadeInOut',
  [
    transition(
      ':leave',
      [
        style({ width: '100%', opacity: 1 }),
        animate('0.15s ease-out',
          style({ width: 0, opacity: 0.1 }))
      ]
    ),
    transition(
      ':enter',
      [
        style({ width: 0, opacity: 0.2 }),
        animate('0.15s ease-in',
          style({ width:  '100%', opacity: 1 }))
      ]
    )
  ]
);
