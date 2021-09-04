import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
})
export class AddEditNotesComponent implements OnInit {

  note = {
    title: "",
    desc: "",
    uploadedAt: Date.now()
  }

  constructor(private ApiService: ApiService, public dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.note = data?.note ? data.note : this.note
  }

  ngOnInit(): void {
  }

  addNote() {
    this.ApiService.addEditNote(this.note).subscribe((res) => {
      this.dialogRef.close(res);
    })
  }

  close() {
    this.dialogRef.close();
  }
}
