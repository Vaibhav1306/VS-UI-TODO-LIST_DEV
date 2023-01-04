import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-task-dialog',
  templateUrl: './add-new-task-dialog.component.html',
  styleUrls: ['./add-new-task-dialog.component.scss'],
})
export class AddNewTaskDialogComponent implements OnInit {
  form: any;

  constructor(
    private dialog: MatDialogRef<AddNewTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      taskName: new FormControl('', Validators.required),
      taskDescription: new FormControl('', Validators.required),
      date: new FormControl(formatDate(new Date(), 'M/d/yy, h:mm a', 'en-US')),
    });
  }

  onCancel() {
    this.dialog.close(false);
  }

  onAddTask() {
    this.dialog.close(this.form.value);
  }
}
