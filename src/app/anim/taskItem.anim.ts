import { trigger,transition,state,style,animate,keyframes} from '@angular/animations';

export const anim = trigger('taskItem',[
    state('in',style({'border-left-width':'5px'})),
    state('out',style({'border-left-width':'3px'})),
    transition("out => in",animate('100ms ease-in')),
    transition("in => out",animate('100ms ease-out')),
])