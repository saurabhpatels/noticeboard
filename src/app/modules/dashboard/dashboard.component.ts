import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
import {MatDialog} from "@angular/material/dialog";
import {AddEditNotesComponent} from "./add-edit-notes/add-edit-notes.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isDateFilter = false;
  value = ''
  notes: any = [];
  allNotes: any = [];
  myControl = new FormControl();
  role = ''

  constructor(private ApiService: ApiService, private MatDialog: MatDialog, private AuthService: AuthService) {
    // get The User Role to Restrict The CRUD Ops.
    this.role = this.AuthService.getUser().role
  }

  ngOnInit(): void {
    // get all the available notes first
    this.getNotes()
    // subscribing to searchInput change events to filter the notes
    this.myControl.valueChanges.pipe(debounceTime(0)).subscribe((event) => {
      this.notes = this.filterNotes(event);
    });
  }

  getNotes() {
    this.ApiService.getNotes().subscribe((res) => {
      this.notes = res
      this.allNotes = res
    })
  }

  filterNotes(event: any) {
    // filter is based on title key Only
    return this.allNotes.filter((i: any) => i.title.toLowerCase().includes(event))
  }

  AddEdit(note?: any) {
    // passing single note or null to Dialog Component in order to perform Add/Edit
    const dialogRef = this.MatDialog.open(AddEditNotesComponent, {width: '500px', data: {note}})
    // subscribing the final outcome of Dialog Component
    dialogRef.afterClosed().subscribe((res) => {
      if(res){
        this.getNotes()
      }
    })
  }

  deleteNote(note: any) {
    // calling Delete API
    this.ApiService.deleteNote(note.id).subscribe((res) => {
      this.getNotes();
    })
  }

  onSortChange(event: any) {
    // Overriding the same variable with ternary Ops.
    this.notes = event.checked ? this.notes.sort((a: any, b: any) => {
      return b.uploadedAt - a.uploadedAt
    }) : this.notes.sort((a: any, b: any) => {
      return a.uploadedAt - b.uploadedAt
    })
  }

  logout() {
    this.AuthService.logout()
  }
}


