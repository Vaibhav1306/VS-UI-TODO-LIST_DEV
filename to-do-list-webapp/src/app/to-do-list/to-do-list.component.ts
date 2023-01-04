import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTaskDialogComponent } from '../add-new-task-dialog/add-new-task-dialog.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DragDrop } from '../Interfaces/drag-drop';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent implements OnInit {
  mock = [];
  form: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      taskList: new FormArray([]),
    });
  }

  drop(event: CdkDragDrop<Array<DragDrop>>) {
    moveItemInArray(this.getTaskList().controls, event.previousIndex, event.currentIndex);
  }

  getTaskList() {
    return this.form.controls['taskList'] as FormArray;
  }

  onAddNewTask() {
    const dialogRef = this.dialog.open(AddNewTaskDialogComponent, {
      disableClose: true,
      width: '400px',
      height: '300px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      const control1 = this.form.controls.taskList.controls;
      control1.push(new FormControl(result));
    });
  }
}
