import { trigger,transition,state,style,animate,keyframes,group,stagger,query} from '@angular/animations';

export const listAnim = trigger('listAnim',[   
    transition("* => *",[
        query(':enter',style({opacity:0}),{ optional: true }),
        query(':enter',stagger(200,[
            animate('1s',style({opacity:1}))
        ]),{ optional: true }),
        query(':leave',style({opacity:1}),{ optional: true }),
        query(':leave',stagger(200,[
            animate('1s',style({opacity:0}))
        ]),{ optional: true }),
    ])
])