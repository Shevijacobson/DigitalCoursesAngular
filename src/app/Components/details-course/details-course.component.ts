import { Component, Input, SimpleChanges } from '@angular/core';
// import { MatIconModule } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon'
// import { MatDividerModule } from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, FormGroup, ReactiveFormsModule, Validators, FormControlName } from '@angular/forms';
import { LessonsService } from '../../Services/Lessons/lessons.service';
import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
import { Lesson } from '../../Models/Lesson';
import { Course } from '../../Models/Course';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field'
import { StudentsService } from '../../Services/Students/students.service';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { link } from 'node:fs';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
 

/**
 * @title Basic buttons
 */
@Component({
  selector: 'details-course',
  templateUrl: 'details-course.component.html',
  styleUrls: ['details-course.component.scss'],
  standalone: true,

  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, RouterLink]
})
export class detailsCourse {

  constructor(public lessons: LessonsService, public funLessons: FunLessonService, private router: Router, private route: ActivatedRoute, public funStudent: FunStudentsService, public funCourse: FunCourseService) { }
  formdata: FormGroup = new FormGroup({})
  testinput!: string

  //יכול להיות שהערך של `idCourse` מועבר לפונקציה לפני שהערך מתעדכן באופן מלא. כדי להבטיח שהערך עודכן כאשר את משתנה את הערך של `idCourse` ב-HTML, תוכלי להשתמש ב-mutation observer או ב-Angular’s Input decorator כדי לפעול בהתאם לשינויים של הערך של `idCourse`. אנא וודאי שהערך נשלח לפונקציה רק כאשר הוא עדכני.
  course!: Course;
  id_course: string = ''
  arr: Lesson[] = []
  link!: string
  exe!: string

  @Input()
  set _course(value: Course) {
    if (value !== this.course) {
      this.course = value;
      this.arr = this.funLessons.LessonForCourse(this.course.Id);
      this.id_course = this.course.Id
    }
  }
  get _course(): Course {
    return this.course;
  }
  savelesson() {

    let arrSudentsOfCourse = this.funStudent.getStudentsOfCoure(this.id_course);
    let newstudentest = {
      Id: (this.arr.length).toString(),
      IdCourse: this.id_course,
      IdStudent: "",
      isExecution: false
      , exe: this.formdata.value.exeValue
      , url: this.formdata.value.linkValue
      , answer: ""
      ,mark:0
    }
    this.funCourse.addNumLesson(newstudentest);
    for (let i = 0; i < arrSudentsOfCourse.length; i++) {
      newstudentest.IdStudent = arrSudentsOfCourse[i].IdStudent;
            this.funLessons.addLessonToArr(newstudentest);
    }
    this.arr = this.funLessons.LessonForCourse(this.course.Id);

  }
  ngOnInit(): void {

    this.formdata = new FormGroup({
      linkValue: new FormControl("", [Validators.required, this.youtubeLinkValidator]),
      exeValue: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  };

  checkval() {

    if (this.formdata.valid) {
      this.formdata.value.linkValue = this.formdata.value.linkValue.substring(32, this.formdata.value.linkValue.length)
      this.savelesson()
      Swal.fire({
        text: 'השיעור נוסף בהצלחה',
        icon: 'success',
        confirmButtonText: 'אישור'
      });
      const numberIdLesson = this.arr.length - 1
      this.router.navigate(['/idCourse/' + this.id_course + '/currentLesson/' + numberIdLesson])
    }
    else
  {
    Swal.fire({
      text: "אחד או יותר מהערכים שהוזנו אינם תקינים",
      icon: 'error',
      confirmButtonText: 'אישור'
    });
  }
     
  }


  youtubeLinkValidator(control: FormControl): { [key: string]: boolean } | null {
    if (!control.value) {
      return null;
    }
    const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
    if (!youtubeRegex.test(control.value)) {
      return { youtubeLink: true };
    }
    return null;
  }
}
