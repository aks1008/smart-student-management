import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
    constructor(private httpClient: HttpClient) {}

    getStudents() {
        return this.httpClient.get('http://127.0.0.1:5005/api/students');
        //return this.httpClient.get<any[]>('assets/mock-students.json');
    }
}
