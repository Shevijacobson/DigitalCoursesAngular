// Id: '1',
// IdCourse: '0',
// IdStudent: '12345678',
// isExecution: true
// , exe: "כתוב את מילות האשאלה באנגלית"
// , url: "jqRw-GndINE"
// , answer: "why, what, where", mark:-1





import { Injectable } from '@angular/core';
import { Student } from '../../Models/Student';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
s1:Student={
  Id: '2222',
  FirstName: 'טליה',
  LastName: 'גליל',
  Password: '2222',
  Access:2
}
s2:Student={
  Id: '24681358',
  FirstName: 'תמר',
  LastName: 'זילבר',
  Password: '789',
  Access:2
}
s3:Student={
  Id: '987654321',
  FirstName: 'איטי',
  LastName: 'שפירא',
  Password: '1212',
  Access:2
}
s4:Student={
  Id: '012345678',
  FirstName: 'רותי',
  LastName: 'כהן',
  Password: '2468',
  Access:2
}
s5:Student={
  Id: '254522356',
  FirstName: 'יהודית',
  LastName: 'סוקולובסקי',
  Password: '2356',
  Access:2
}
s6:Student={
  Id: '859658745',
  FirstName: 'ציפי',
  LastName: 'יעקובוביץ',
  Password: '8745',
  Access:2
}
s7:Student={
  Id: '547455822',
  FirstName: 'מרים',
  LastName: 'דאהן',
  Password: '5822',
  Access:2
}
s8:Student={
  Id: '548558633',
  FirstName: 'רבקה',
  LastName: 'לבל',
  Password: '8633',
  Access:2
}
s9:Student={
  Id: '896589584',
  FirstName: 'ריקי',
  LastName: 'שפיגל',
  Password: '9584',
  Access:2
}
s10:Student={
  Id: '9856558799',
  FirstName: 'דבורי',
  LastName: 'חן',
  Password: '5899',
  Access:2
}
students:Student[]=[this.s1,this.s2,this.s3,this.s4,this.s5,this.s6,this.s7,this.s8,this.s9,this.s10]
  constructor() { }
}
