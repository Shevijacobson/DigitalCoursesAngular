import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControlName } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import Swal from 'sweetalert2';
import { FunTecherService } from '../../Services/Functions/fun-techer.service';
import { FunStudentsService } from '../../Services/Functions/fun-students.service';
import { UserService } from '../../Services/user/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, ReactiveFormsModule, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() loginToHomePage: EventEmitter<boolean> = new EventEmitter()
  constructor(private router: Router, private route: ActivatedRoute, public FunTecher:FunTecherService, public FunStudents: FunStudentsService, public user:UserService) { }
  login() {
    if (this.formdata.valid) {
    const access=this.findType() 
    switch(access){
      case 0:{
        this.router.navigate(['/HomePageManager/managerAllCourses'])
        console.log("manager 👩‍🎓")///מנהל
        this.loginToHomePage.emit()
        break;
      }
      case 1:{
        this.router.navigate(['/HomePageTeacher'])///מורה
        this.loginToHomePage.emit()
        break;
      }
      case 2:{
        this.router.navigate(['/HomePageStudent'])///מורה
        console.log("wow ☺") ///תלמיד
        this.loginToHomePage.emit()
        break;
      }
      default:
        {
          Swal.fire({
            text: 'שם משתמש או הסיסמה אינם תקינים  ',
            icon: 'error',
            confirmButtonText: 'אישור'
          })
        }
    }}

  }
  formdata: FormGroup = new FormGroup({})
  userName!: string
  password!: string

  ngOnInit(): void {
    this.formdata = new FormGroup({
      userNameValue: new FormControl("", [Validators.required, Validators.minLength(2)]),
      passwordValue: new FormControl("", [Validators.required, Validators.minLength(2)])
    })
  };
  findType() {
  
if(!this.FunTecher.getUser(this.formdata.value.userNameValue,this.formdata.value.passwordValue ) ) 
  if(!this.FunStudents.getUser(this.formdata.value.userNameValue,this.formdata.value.passwordValue ))

       return -1 
return this.user.user.Access
}
}

