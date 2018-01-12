import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买杯咖啡',
          priority:1,
          completed: true,
          reminder:new Date(),
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 去星巴克再买杯咖啡',
          priority:2,
          completed: true,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-12'
          },
          dueDate: new Date()
        },
        {
          id: 3,
          desc: '任务三: 去星巴克再买杯咖啡',
          priority:3,
          completed: false,
          owner: {
            id: 1,
            name: '王五',
            avatar: ''
          },
          dueDate: new Date()
        }
      ]
    },
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一: 去星巴克买杯咖啡',
          priority:1,
          completed: true,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-2'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二: 去星巴克再买杯咖啡',
          priority:2,
          completed: true,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-3'
          },
          dueDate: new Date()
        }
      ]
    }
  ];
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  launchNewTask(){
    this.dialog.open(NewTaskComponent,{data:{title:'新建任务:'}});
  }
  launchMoveTask(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
  }
  launchEditTask(task){
    this.dialog.open(NewTaskComponent,{data:{title:'编辑任务:',task:task}});
  }
  launchDelTask(){
    const dialogRef = this.dialog.open(ComfirmDialogComponent,{data:{title:'删除列表:',content:'确认删除列表吗?'}});
    dialogRef.afterClosed().subscribe(res=>console.log(res));
  }
  openNewTaskListDialog(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:'新增列表:'}});
  }
  launchEditListTask(){
    const dialogRef = this.dialog.open(NewTaskListComponent,{data:{title:'修改列表名称:'}});
  }
}
