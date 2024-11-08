import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [{ _id: "1", name: "Curso Angular", category: "Front-end" }];
  displayedColumns: string[] = ['name', 'category'];
  dataSource = [];

  constructor() { }
  ngOnInit(): void { }

}
