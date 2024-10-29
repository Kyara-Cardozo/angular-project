import { Injectable } from '@angular/core';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  list(): Course[] {
    return [
      { _id: "1", name: "Curso Angular", category: "Front-end" }
    ];
  }
  constructor() { }
}
