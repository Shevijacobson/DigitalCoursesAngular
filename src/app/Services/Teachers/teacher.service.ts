import { Injectable } from '@angular/core';
import { Teacher } from '../../Models/Teacher';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  manager:Teacher={
    Id: '0000',
    FirstName: 'שבי',
    LastName: 'יעקובזון',
    Password: '0000',
    Access:0
  }
    t1:Teacher={
    Id: '123456789',
    FirstName: 'מלכה ',
    LastName: 'כהנים',
    Password: '1111',
    Access:1
  }
  t2:Teacher={
    Id: '333235014',
    FirstName: 'שולמית',
    LastName: 'שטרן',
    Password: '1234',
    Access:1
  }
  t3:Teacher={
    Id: '8825484626',
    FirstName: 'שרית',
    LastName: 'ברנסדופר',
    Password: '111',
    Access:1
  }
  t4:Teacher={
    Id: '152568563',
    FirstName: 'לאה',
    LastName: 'פולק',
    Password: '1259',
    Access:1
  }
teachers:Teacher[]=[this.manager,this.t1,this.t2,this.t3,this.t4]

  constructor() { }

}
