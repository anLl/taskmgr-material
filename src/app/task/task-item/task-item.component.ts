import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  public avatar;

  @Output() taskItem = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner && this.item.owner.avatar != ''  ? this.item.owner.avatar : 'unassigned'
  }
  taskItemClick(){
    this.taskItem.emit();
  }
  onCheckBoxClick(ev:Event){
      ev.stopPropagation();
  }
}
