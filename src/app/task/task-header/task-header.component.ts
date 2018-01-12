import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() header= '';
  @Output() newTaskEvent = new EventEmitter<void>()
  @Output() moveTaskEvent = new EventEmitter<void>()
  @Output() deleteEvent = new EventEmitter<void>()
  @Output() editEvent = new EventEmitter<void>()
  constructor() { }

  ngOnInit() {
  }

  newTaskClick(){
    this.newTaskEvent.emit();
  }
  moveTaskClick(){
    this.moveTaskEvent.emit();
  }
  deleteTaskClick(){
    this.deleteEvent.emit();
  }
  editTaskListClick(){
    this.editEvent.emit();
  }

}
