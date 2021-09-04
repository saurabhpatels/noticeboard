import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AddEditNotesComponent} from './add-edit-notes/add-edit-notes.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [
    DashboardComponent,
    AddEditNotesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [AddEditNotesComponent],
  exports: [RouterModule]
})
export class DashboardModule {
}
