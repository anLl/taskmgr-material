import { Component, OnInit,Input,Output,EventEmitter,HostListener } from '@angular/core';
import { anim } from '../../anim/taskItem.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[
    anim
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  public avatar;

  @Output() taskItem = new EventEmitter<void>();
  constructor() { }

  widerPriority = 'out'

  ngOnInit() {
    this.avatar = this.item.owner && this.item.owner.avatar != ''  ? this.item.owner.avatar : 'unassigned'
  }
  taskItemClick(){
    this.taskItem.emit();
  }
  onCheckBoxClick(ev:Event){
      ev.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseenter(){
    this.widerPriority = 'in'
  }

  @HostListener('mouseleave')
  onMouseleave(){
    this.widerPriority = 'out'
  }
}
