import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentService } from '../../services/student';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-student-grid',
  imports: [CommonModule, DxDataGridModule],
  standalone: true,
  templateUrl: './student-grid.html',
    styleUrls: ['./student-grid.scss']
})
export class StudentGrid {
    studentsDataSource: any;

    constructor(private studentService: StudentService, private http: HttpClient) {
        this.loadStudents();
    }

    loadStudents() {
        this.studentService.getStudents()
            .subscribe({
                next: (data) => {
                    this.studentsDataSource = data;
                },
                error: (err) => {
                    console.warn('API load failed, falling back to local mock data:', err);
                }
            });
    }
}
