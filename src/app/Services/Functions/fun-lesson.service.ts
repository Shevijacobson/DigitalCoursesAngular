import { Injectable } from '@angular/core';
import { LessonsService } from '../Lessons/lessons.service';
import { Lesson } from '../../Models/Lesson';
import { Fun1Service } from './fun1.service';
import { CoursesService } from '../Courses/courses.service';
import { Course } from '../../Models/Course';
import { Student } from '../../Models/Student';

@Injectable({
  providedIn: 'root'
})
export class FunLessonService {

  constructor(public lesson: LessonsService, private course: CoursesService) { }
  //פונקציה שמקבלת מספר קורס ומחיזירה את כל השיעורים של הקורס
  LessonForCourse(idCourse: string) {
    let arrlessonOfCourse = []
    let isExist = false
    for (let i = 0; i < this.lesson.arrLesson.length; i++) {
      if (this.lesson.arrLesson[i].IdCourse == idCourse) {
        // console.log(this.lesson.arrLesson[i])
        for (let j = 0; j < arrlessonOfCourse.length; j++)
          if (this.lesson.arrLesson[i].Id == arrlessonOfCourse[j].Id)
            isExist = true;

        if (!isExist)
          arrlessonOfCourse.push(this.lesson.arrLesson[i])
        isExist = false;
      }
    }
    return arrlessonOfCourse
  }

  // פונקציה שמקבלת שיעור ומוסיפה אותו למערך
  addLessonToArr(newLesson: Lesson) {
    this.lesson.arrLesson.push(newLesson)

    console.log(this.lesson.arrLesson)
  }


  // פונקציה שמביא את התרגיל של השיעור
  // הנוכחי רצים על השיעורים ובודקקים האם וד קורס וןד שיעור שווים
  getExeLesson(idCourse: string, idLesson: string) {
    for (let i = 0; i < this.lesson.arrLesson.length; i++)
      if (idCourse == this.lesson.arrLesson[i].IdCourse && idLesson == this.lesson.arrLesson[i].Id)
        return this.lesson.arrLesson[i].exe

    return " "
  }

  //פונקציה שמחזירה את הURL של הסרטון של השיעור הנוכחי
  getUrlYoutube(idCourse: string, idLesson: string) {
    for (let i = 0; i < this.lesson.arrLesson.length; i++) {
      if (idCourse == this.lesson.arrLesson[i].IdCourse && idLesson == this.lesson.arrLesson[i].Id)
        return this.lesson.arrLesson[i].url
    }
    return ""
  }
  //פונקציה שמוסיפה את התרגיל שהתלמיד ביצע ומסמנת שהתלמיד הקשיב
  finishLesson(idCourse: string, idLesson: string, idStudent: string, answer: string) {
    for (let i = 0; i < this.lesson.arrLesson.length; i++) {
      if (idCourse == this.lesson.arrLesson[i].IdCourse && idLesson == this.lesson.arrLesson[i].Id)
        if (idStudent == this.lesson.arrLesson[i].IdStudent) {
          this.lesson.arrLesson[i].answer = answer;
          this.lesson.arrLesson[i].isExecution = true
          console.log(this.lesson.arrLesson[i])
        }
    }
  }

  //פונקציה שמקבלת קורס ושיור ובודקת אם התלמיד כבר ענה תשובה של השיעור הזה
  IfAnser(idCourse: string, numLesson: string, idStudent: string) {
    for (let i = 0; i < this.lesson.arrLesson.length; i++) {
      if (this.lesson.arrLesson[i].IdCourse == idCourse && this.lesson.arrLesson[i].Id == numLesson && this.lesson.arrLesson[i].IdStudent == idStudent) {
        if (this.lesson.arrLesson[i].answer != null)
          return this.lesson.arrLesson[i].answer
        else
          return ""
      }
    }
    return ""
  }
  //פונקציה שמקבלת מספר תלמיד ומספר שיעור ומחזירה את כל השישעורים של התלמיד בקורס
  GetAllLessonsByIdStudent(idStudent: string, idCourse: string) {
    let arrLessons = [];
    let index = 0;
    for (let i = 0; i < this.lesson.arrLesson.length; i++) {
      if (this.lesson.arrLesson[i].IdCourse == idCourse && this.lesson.arrLesson[i].IdStudent == idStudent)
        arrLessons[index++] = this.lesson.arrLesson[i];
    }
    // console.log(arrLessons);
    return arrLessons;
  }
  addStudentToCourse(student: Student, course: Course) {
    let newCourse = { ...course }
    newCourse.IdStudent = student.Id;
    this.course.arrCourses.push(newCourse);

    this.addLessonsToStudents(course);
  }

  addLessonsToStudents(currentCourse: Course) {
    let newLesson: Lesson = {
      Id: '',
      IdCourse: '',
      IdStudent: '',
      isExecution: false,
      exe: '',
      url: '',
      answer: '',
      mark: -1,
    }
    let isLesson = false;
    for (let i = 0; i < this.lesson.arrLesson.length && !isLesson; i++) {
      if (currentCourse.Id == this.lesson.arrLesson[i].IdCourse) {
        newLesson = { ...this.lesson.arrLesson[i] }
        isLesson = true;
      }
    }

    newLesson.IdCourse = currentCourse.Id;
    newLesson.IdStudent = currentCourse.IdStudent;
    newLesson.isExecution = false;
    newLesson.mark = -1;

    for (let i = 0; i < currentCourse.NumLessons; i++) {
      newLesson.Id = i.toString();
      this.lesson.arrLesson.push(newLesson);
    }

  }


}

