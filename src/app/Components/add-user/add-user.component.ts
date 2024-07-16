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
// import Validation from '../../Models/validation';
import { CommonModule } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { Teacher } from '../../Models/Teacher';
import { FunCourseService } from '../../Services/Functions/fun-course.service';
import { Course } from '../../Models/Course';
import { CoursesService } from '../../Services/Courses/courses.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { Student } from '../../Models/Student';
import { FunLessonService } from '../../Services/Functions/fun-lesson.service';
import { retry } from 'rxjs';
import { versions } from 'node:process';
@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatDividerModule, MatIconModule, MatButtonModule, MatInputModule, MatFormField, MatSelectModule, MatFormFieldModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  coursesControl = new FormControl([{}]);

  someMethod(coursesChosen: any) {
    this.coursesChosen = coursesChosen;
  }

  form: FormGroup = new FormGroup({});
  isTeacher = false;
  coursesChosen: Course[] = [{
    Id: "",
    Name: "",
    NumLessons: 0,
    IdTeacher: "",
    IdStudent: ""
  }]
  coursesChosen2 = ["1"]

  submitted = false;
  coursesList: Course[] = [];
  userToEdit = {
    Id: '',
    FirstName: '',
    LastName: '',
    Password: '',
    Access: "",
    courses: [""]
  };
  newStudent!: Student
  status
  isEdit: boolean = false;



  arr = ["1", "3"]
  constructor(private funTeacher: FunTecherService, private funCourses: FunCourseService, public router: Router, private funStudent: FunStudentsService, private funLesson: FunLessonService, private route1: ActivatedRoute) {

    this.coursesList = funCourses.getAllCourses();
    //המתמש לעריכה 
    const navigation = this.router.getCurrentNavigation();
    this.userToEdit = navigation?.extras.state?.['userToEdit'];
    this.status = this.router.url.split('/').pop();

    if (this.status == "addTeacher")
      this.isTeacher = true;

  }
  ngOnInit(): void {

    if (this.status?.includes("edit")) {
      this.coursesChosen2 = this.userToEdit?.courses;
      const preselectedCourses = this.coursesList.filter(course => this.coursesChosen2?.includes(course.Name));
      this.coursesControl.setValue(preselectedCourses);
      console.log(!this.router.url.split('/').pop()?.includes('editTeacher'))

    }


    if (this.status?.includes("edit"))
      this.isEdit = true;

    this.form = new FormGroup(
      {
        firstName: new FormControl(this.userToEdit?.FirstName, [Validators.required]),
        lastName: new FormControl(this.userToEdit?.LastName, [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ]),
        id: new FormControl({ value: this.userToEdit?.Id, disabled: this.isEdit }, [Validators.required, Validators.minLength(9), Validators.maxLength(9),]),
        password: new FormControl(this.userToEdit?.Password,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(40),
          ]),
        confirmPassword: new FormControl(this.userToEdit?.Password, [Validators.required]),
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    if (this.status?.includes("addTeacher")) {
      let newTeacher: Teacher = {
        Id: this.form.value.id,
        FirstName: this.form.value.firstName,
        LastName: this.form.value.lastName,
        Password: this.form.value.password,
        Access: 1
      }

      if (this.funTeacher.AddTeacher(newTeacher) == 200) {

        Swal.fire({
          text: 'המורה נוסף בהצלחה הינך מועבר לרשימת המורים',
          icon: 'success',
          confirmButtonText: 'אישור'
        });
        this.router.navigate(['HomePageManager/teachersReport'])

      }

      else
        Swal.fire({
          text: 'ת.ז. זו כבר קיימת במערכת',
          icon: 'error',
          confirmButtonText: 'אישור'
        });
    }
    else
      if (this.status?.includes("addStudent")) {
        this.newStudent = {
          Id: this.form.value.id,
          FirstName: this.form.value.firstName,
          LastName: this.form.value.lastName,
          Password: this.form.value.password,
          Access: 2
        }
        if (this.funStudent.addStudent(this.newStudent) == 200) {

          if (this.coursesChosen) {

            for (let i = 0; i < this.coursesChosen.length; i++)

              this.funLesson.addStudentToCourse(this.newStudent, this.coursesChosen[i])
          }
          Swal.fire({
            text: 'התלמיד נוסף בהצלחה הינך מועבר לרשימת התלמידים',
            icon: 'success',
            confirmButtonText: 'אישור'
          });
          this.router.navigate(['HomePageManager/studentsReport'])

        }

        else
      
          Swal.fire({
            text: 'ת.ז. זו כבר קיימת במערכת',
            icon: 'error',
            confirmButtonText: 'אישור'
          });

      }
      else
      {
        if (this.status?.includes("editTeacher")) {
          let teacherToEdit: Teacher = {
            Id: this.userToEdit.Id,
            FirstName: this.form.value.firstName,
            LastName: this.form.value.lastName,
            Password: this.form.value.password,
            Access: 1
          }

          this.funTeacher.editTeacher(teacherToEdit)
          Swal.fire({
            text: 'הפרטים עודכנו בהצלחה',
            icon: 'success',
            confirmButtonText: 'אישור'
          });
          this.router.navigate(['HomePageManager/teachersReport'])

       
        }
        else {

          let studentToEdit = {
            Id: this.userToEdit.Id,
            FirstName: this.form.value.firstName,
            LastName: this.form.value.lastName,
            Password: this.form.value.password,
            Access: 2
          }
          let isFind = false
          let deletea = []
          let deleteb: Course[] = []
          for (let i = 0; i < this.userToEdit.courses.length; i++) {
            isFind = false
            for (let j = 0; j < this.coursesChosen.length; j++)
              if (this.userToEdit.courses[i] == this.coursesChosen[j].Name) {
                isFind = true;
              }
            if (!isFind)
              deletea.push(this.userToEdit.courses[i])

          }
          for (let i = 0; i < deletea.length; i++)
            for (let j = 0; j < this.coursesList.length; j++) {
              if (deletea[i] == this.coursesList[j].Name) {
                console.log("deletea[i]", deletea[i], "this.coursesList[j].Name", this.coursesList[j].Name)
                deleteb.push(this.coursesList[j])
              }

            }
          for (let course of deleteb)
            this.funStudent.deleteCourseAndLessonsByIdStudent(studentToEdit, course.Id)
        

          let coursesToAdd: Course[] = []
          for (let i = 0; i < this.coursesChosen.length; i++) {
            isFind = false;
            for (let j = 0; j < this.userToEdit.courses.length && !isFind; j++)
              if (this.coursesChosen[i].Name == this.userToEdit.courses[j])
                isFind = true

            if (!isFind)
              coursesToAdd.push({ ...this.coursesChosen[i] })
          }
          for (let course of coursesToAdd) {
            course.IdStudent = this.userToEdit.Id
            this.funLesson.addStudentToCourse(studentToEdit,course)
          }

          Swal.fire({
            text: 'הפרטים עודכנו בהצלחה',
            icon: 'success',
            confirmButtonText: 'אישור'
          });
          this.router.navigate(['HomePageManager/studentsReport'])

        }
      

      }
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}