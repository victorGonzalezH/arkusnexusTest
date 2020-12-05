import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserControl } from './user-control.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  form: FormGroup;
  usersControls: UserControl<string>[];
  constructor(private formBuilder: FormBuilder) { 
    this.usersControls = [];
  }

  ngOnInit() {
    this.usersControls.push(new UserControl({ key: 'email', label: 'Email', order: 1, required: true, value: '', controlType: 'email' }));
    this.usersControls.push(new UserControl({ key: 'password', label: 'Password', order: 2, required: true, value: '', controlType: 'password' }));
    this.form = this.toFormGroup(this.usersControls);
  }


  toFormGroup(usercontrols: UserControl<any>[] ) {
    let group: any = {};

    usercontrols.forEach(userControl => {
      group[userControl.key] = userControl.required ? new FormControl(userControl.value || '', Validators.required)
                                              : new FormControl(userControl.value || '');
    });

    return new FormGroup(group);
  }


}
