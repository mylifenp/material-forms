import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { JsonPipe } from '../../pipes/utils/json.pipe';
import { NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    JsonPipe,
    NgFor,
  ],
})
export class FormsComponent {
  myForm!: FormGroup;
  displayedColumns: string[] = ['name', 'proficiency'];
  dataSource!: MatTableDataSource<any>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      skills: this.fb.array([
        this.fb.group({
          name: '',
          proficiency: 'Novice',
        }),
      ]),
    });

    this.dataSource = new MatTableDataSource(this.skills.controls);
  }

  get skills(): FormArray {
    return this.myForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.group({ name: '', proficiency: 'Novice' }));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  onSubmit() {
    console.log(this.myForm.value);
  }
}
