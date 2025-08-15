import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    constructor(private httpClient: HttpClient) {}

    getStudents() {
        //return this.httpClient.get('http://localhost:8000/api/student/list');
        return this.httpClient.get<any[]>('assets/mock-students.json');
    }
}
