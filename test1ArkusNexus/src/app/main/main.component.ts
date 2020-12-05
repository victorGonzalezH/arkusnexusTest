import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskslistComponent } from './taskslist/taskslist.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  /*Formulario de login */
  public tasksFormControl: FormGroup;

  @ViewChild(TaskslistComponent, {static: false}) tasksListComponent: TaskslistComponent;

  constructor() { }

  ngOnInit() {
    this.tasksFormControl = new FormGroup(
      {

         taskControl: new FormControl('', [Validators.required]),
         priorityControl: new FormControl('', [Validators.required]),

      });
  }

  onAddTask() {
    const name = this.tasksFormControl.get('taskControl').value;
    const priority = this.tasksFormControl.get('priorityControl').value;
    this.tasksListComponent.addTask(name, priority);
  }

}
