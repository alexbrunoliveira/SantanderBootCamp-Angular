import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector: 'app-course-List',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit { 

    // criando o array
    courses: Course[] = [];
    
    // método siclo de vida do  componente do angular
    ngOnInit(): void {

        this.courses = [
        {
            id:1,
            name: 'Angular Forms',
            imageUrl: '/assets/images/forms.png',
            price: 99.99,
            code: 'XPS-9796',
            duration: 120,
            rating: 4,
            releaseDate:'November, 2, 2019'
        },

        {
            id: 2,
            name: 'Angular HTTP',
            imageUrl: '/assets/images/http.png',
            price: 45.99,
            code: 'LKL-1094',
            duration: 80,
            rating:4.5,
            releaseDate: 'December, 4, 2019'

        }
    ]

}

}
