import { Injectable } from '@angular/core';
import { Course } from '../../Models/Course';
@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  idCourseService=6
c0:Course={
  Id: '0',
  Name: 'אנגלית',
  NumLessons: 3,
  IdTeacher: '123456789',
  IdStudent: '12345678'
}

c12:Course={
  Id: '0',
  Name: 'אנגלית',
  NumLessons: 3,
  IdTeacher: '123456789',
  IdStudent: '859658745'
}
c13:Course={
  Id: '0',
  Name: 'אנגלית',
  NumLessons: 3,
  IdTeacher: '123456789',
  IdStudent: '254522356'
}
c1:Course={
  Id: '1',
  Name: 'JS',
  NumLessons: 2,
  IdTeacher: '333235014',
  IdStudent: '24681358'
}
c5:Course={
  Id: '1',
  Name: 'JS',
  NumLessons: 2,
  IdTeacher: '333235014',
  IdStudent: '896589584'
}
c6:Course={
  Id: '1',
  Name: 'JS',
  NumLessons: 2,
  IdTeacher: '333235014',
  IdStudent: '9856558799'
}

c2:Course={
  Id: '2',
  Name: 'תחזוקת מחשבים',
  NumLessons: 6,
  IdTeacher: '123456789',
  IdStudent: '987654321'
}
c7:Course={
  Id: '2',
  Name: 'תחזוקת מחשבים',
  NumLessons: 6,
  IdTeacher: '123456789',
  IdStudent: '012345678'
}
c8:Course={
  Id: '2',
  Name: 'תחזוקת מחשבים',
  NumLessons: 6,
  IdTeacher: '123456789',
  IdStudent: '254522356'
}
c3:Course={
  Id: '3',
  Name: 'שפת C#',
  NumLessons: 3,
  IdTeacher: '8825484626',
  IdStudent: '012345678'
}

c10:Course={
  Id: '3',
  Name: 'שפת C#',
  NumLessons: 3,
  IdTeacher: '8825484626',
  IdStudent: '859658745'
}
c4:Course={
  Id: '4',
  Name: 'אומנות',
  NumLessons: 3,
  IdTeacher: '123456789',
  IdStudent: '987654321'
}
c14:Course={
  Id: '5',
  Name: 'ריאקט',
  NumLessons: 0,
  IdTeacher: '8825484626',
  IdStudent: '987654321'
}
c15:Course={
  Id: '0',
  Name: 'אנגלית',
  NumLessons: 3,
  IdTeacher: '123456789',
  IdStudent: '987654321'
}
arrCourses:Course[]=[this.c0,this.c1,this.c2,this.c3,this.c4,this.c5,this.c6,this.c7,this.c8,this.c10,this.c12,this.c13,this.c14, this.c15]
  constructor() { }
}
