import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-taskslist',
  templateUrl: './taskslist.component.html',
  styleUrls: ['./taskslist.component.css']
})
export class TaskslistComponent implements OnInit {
  displayedColumns = ['position', 'name', 'priority'];
  public dataSource: TaskSchema[];
  dataSourceObs: Observable<TaskSchema[]>;
  dataSourceSub: Subject<TaskSchema[]>;
  constructor() {
    this.dataSource = [];

   }

  ngOnInit() {

    this.dataSourceSub = new Subject<TaskSchema[]>();
    this.dataSourceObs = this.dataSourceSub.asObservable();
  }


  addTask(name: string, priority: number) {

    this.dataSource.push({  position: this.dataSource.length + 1, name, priority });
    this.dataSourceSub.next(this.dataSource);
  }

}


export interface TaskSchema {
  name: string;
  position: number;
  priority: number;
}
