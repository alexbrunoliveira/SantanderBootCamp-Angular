import { Component, OnInit } from "@angular/core";
import { Course } from './course';
import { CourseService } from "./course.service";

@Component({
    selector: 'app-course-List',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { 

    // criando o array

    filteredCourses: Course[] = [];

    _courses: Course[] = [];
    _filterBy: string;


    constructor(private courseService: CourseService) { }

    // método siclo de vida do  componente do angular
    ngOnInit(): void {
       this._courses = this.courseService.retrieveAll();
       this.filteredCourses = this._courses;
    }

    // Criando os evende de input e output

    set filter(value: string) {
        this._filterBy = value;
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
