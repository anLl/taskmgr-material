import { Component, OnInit ,HostBinding} from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ComfirmDialogComponent } from '../../shared/comfirm-dialog/comfirm-dialog.component';
import { RouteAnim } from '../../anim/route.anim';
import { listAnim } from '../../anim/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[
    RouteAnim,
    listAnim
  ]
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@route') state
  projects=[
    {
      "id":1,
      "name":"企业协作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "id":2,
      "name":"企业协作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/1.jpg"
    },
    {
      "id":3,
      "name":"企业协作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/2.jpg"
    }
  ];
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'新建项目:'}});
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      this.projects = [...this.projects,
        {'id':4,'name':'这是一个新项目','desc':'这是一个新项目',"coverImg":"assets/img/covers/3.jpg"},
        {'id':5,'name':'这是又一个新项目','desc':'这是又一个新项目',"coverImg":"assets/img/covers/4.jpg"},
    ]
    });
  }

  launchInviteDialog(){
    const dialogRef = this.dialog.open(InviteComponent,{width:'470px',height:'350px'});
  }

  launchEditDialog(){
    const dialogRef = this.dialog.open(NewProjectComponent,{data:{title:'编辑项目:'}});
  }
  launchDelDialog(project){
    const dialogRef = this.dialog.open(ComfirmDialogComponent,{data:{title:'删除项目',content:'确认删除该项目吗?'}});
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      this.projects = this.projects.filter(p => p.id !== project.id)
    });
  }

}
