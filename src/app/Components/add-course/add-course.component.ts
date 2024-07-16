import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import Validation from '../../Models/validion';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
// import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { Teacher } from '../../Models/Teacher';
// import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { Course } from '../../Models/Course';
import { CoursesService } from '../../Services/Courses/courses.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';



/////////////////////////////
@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDividerModule, MatIconModule, MatButtonModule, MatInputModule, MatFormField, MatSelectModule, MatFormFieldModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})

export class AddCourseComponent {


  someMethod(teacherChosen: any) {
    this.teacherChosen = teacherChosen;
  }

  form: FormGroup = new FormGroup({});
  teacherChosen!: Teacher
  teachersArr!: Teacher[]
  submitted = false;
  isExistTeacherChosen = true;
  newCourse!: Course

  constructor(private funTeacher: FunTecherService, private funCourses: FunCourseService, private router: Router) {
    this.teachersArr = funTeacher.getAllTeachers();
   
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        nameCourse: new FormControl('', [Validators.required]),
      },

    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (!this.teacherChosen) {
      this.isExistTeacherChosen = false;
      return;
    }

    if (this.form.invalid)
      return;


    this.teacherChosen = {
      Id: this.teacherChosen.Id,
      FirstName: this.teacherChosen.FirstName,
      LastName: this.teacherChosen.LastName,
      Password:this.teacherChosen.Password,
      Access: 1
    }
console.log(this.teacherChosen)
    this.newCourse = {
      Id: "0",
      Name: this.form.value.nameCourse,
      NumLessons: 0,
      IdTeacher: this.teacherChosen.Id,
      IdStudent: "0"
    }

    console.log("IdTeacher", this.newCourse.IdTeacher)
    if (this.funCourses.addCourse(this.newCourse) == 200) {
      Swal.fire({
        text: 'הקורס נוסף בהצלחה הינך מועבר לרשימת הקורסים',
        icon: 'success',
        confirmButtonText: 'אישור'
      });
      this.router.navigate(['HomePageManager/managerAllCourses'])
    }
    else

      Swal.fire({
        text: ' קורס זה כבר קיים במערכת',
        icon: 'error',
        confirmButtonText: 'אישור'
      });
  }




}



// export class AddCourseComponent {
//   form: FormGroup = new FormGroup({});
//   teacherChosen!: Teacher;
//   teachersArr!: Teacher[];
//   submitted = false;
//   isExistTeacherChosen = true;
//   newCourse!: Course;

//   constructor(private funTeacher: FunTecherService, private funCourses: FunCourseService, private router: Router) {
//     this.teachersArr = funTeacher.getAllTeachers();
//   }

//   ngOnInit(): void {
//     this.form = new FormGroup({
//       nameCourse: new FormControl('', [Validators.required]),
//     });
//   }

//   get f(): { [key: string]: FormControl } {
//     return this.form.controls as { [key: string]: FormControl };
//   }

//   someMethod(teacherChosen: Teacher) {
//     this.teacherChosen = teacherChosen;
//   }

//   onSubmit(): void {
//     this.submitted = true;
    
//     // Check if a teacher has been chosen
//     if (!this.teacherChosen) {
//       this.isExistTeacherChosen = false;
//       return;
//     }

//     // Get the ID of the chosen teacher
//     const IdTeacher = this.teacherChosen.Id;

//     if (this.form.invalid)
//       return;

//     // Create a new course object
//     this.newCourse = {
//       Id: "0",
//       Name: this.form.value.nameCourse,
//       NumLessons: 0,
//       IdTeacher: IdTeacher,
//       IdStudent: "0"
//     };

//     console.log("IdTeacher", this.newCourse.IdTeacher);
    
//     if (this.funCourses.addCourse(this.newCourse) == 200) {
//             Swal.fire({
//               text: 'הקורס נוסף בהצלחה הינך מועבר לרשימת הקורסים',
//               icon: 'success',
//               confirmButtonText: 'אישור'
//             });
//             this.router.navigate(['HomePageManager/managerAllCourses'])
//           }
//           else
//           Swal.fire({
//                     text: ' קורס זה כבר קיים במערכת',
//                     icon: 'error',
//                     confirmButtonText: 'אישור'
//                   });
//   }
// }
