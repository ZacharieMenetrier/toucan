import { trigger, state, style, transition, animate } from '@angular/animations';

export const FadeIn = {
    trigger: trigger('simpleFadeAnimation', [
        state('in', style({opacity: 1})),
        transition(':enter', [
            style({ opacity: 0 }),
            style({ transform: 'translateY(10%)' }),
            animate('0.3s 0s ease')
        ]),
        transition(':leave',
        animate('0.3s 0s ease', style({opacity: 0, transform: 'translateY(10%)'})))
    ])
};