import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YouTubePlayer } from '@angular/youtube-player';
// import { FunCourseService } from '../../Services/Functions/fun-course.service';
// import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
//import { MatButtonModule } from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControlName } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { UserService } from '../../Services/user/user.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-current-lesson',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule, FormsModule, CommonModule, YouTubePlayer],
  templateUrl: './current-lesson.component.html',
  styleUrl: './current-lesson.component.scss'
})
export class CurrentLessonComponent {

  formdata: FormGroup = new FormGroup({})
  try!: string
  numLesson!: string
  idCourse!: string
  nameCourse!: string
  exe!: string
  urlVideo!: string
  link!: string

  answerStudent!: string


  constructor(public route: Router, public user: UserService, private getParam: ActivatedRoute, private FunCourses: FunCourseService, private FunLesson: FunLessonService) {
    getParam.params.subscribe(params => {
      this.numLesson = params['numberIdLesson']
      this.idCourse = params['idCourse']

    })

    this.nameCourse = this.FunCourses.getNameCourseOfId(this.idCourse)
    this.numLesson = (this.numLesson).toString()
    this.urlVideo = FunLesson.getUrlYoutube(this.idCourse, this.numLesson)
    this.exe = FunLesson.getExeLesson(this.idCourse, this.numLesson)
    this.answerStudent = this.FunLesson.IfAnser(this.idCourse, this.numLesson, this.user.user.Id)
  }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      answerStudentValue: new FormControl("", [Validators.required, Validators.minLength(2)])
    })
  };
  numLessonPlusOne(num: string) {
    return parseInt(num) + 1;
  }
  returnToLesson() {
    if (this.user.user.Access == 0)
      this.route.navigate(['/HomePageManager/CurrentCourse/' + this.idCourse])

    if (this.user.user.Access == 1)
      this.route.navigate(['/HomePageTeacher'])
    if (this.user.user.Access == 2)
      this.route.navigate(['/DisplayCourse/CurrentCourse/' + this.idCourse])


  }
  //לבטל למהנל????
  finishLesson() {
    this.answerStudent = this.formdata.value.answerStudentValue
    if (this.formdata.valid) {

      this.FunLesson.finishLesson(this.idCourse, this.numLesson, this.user.user.Id, this.answerStudent)
      Swal.fire({
        text: 'הגשת התרגיל התקבלה בהצלחה, הנך מועבר לרשימת השיעורים',
        icon: 'success',
        confirmButtonText: 'אישור'
      });
      console.log(this.answerStudent)
      this.route.navigate(['/DisplayCourse/CurrentCourse/' + this.idCourse])

    }
    else
      Swal.fire({
        text: 'כדי לעבור לשיעור הבא הנך צריך לצפות בשיעור ולענות על השאלה',
        icon: 'error',
        confirmButtonText: 'עבור להמשך השיעור'
      });

  }
}


