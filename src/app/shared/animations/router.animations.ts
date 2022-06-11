import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const routerAnimations = trigger('routerAnimations', [
    // transition('* <=> *', [

    // ]),
    transition('home => *, dress => contact, dress => about, about => contact', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ left: '100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '-100%' }))
            ], { optional: true }),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%' }))
            ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
    transition('dress => home, about => home, about => dress, contact => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [
                animate('300ms ease-out', style({ left: '100%' }))
            ], { optional: true }),
            query(':enter', [
                animate('300ms ease-out', style({ left: '0%' }))
            ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
    ]),
]);