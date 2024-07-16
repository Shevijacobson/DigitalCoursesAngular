import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
// import { youtubeLinkValidator } from './youtube-link.validator';
// import  { youtubeLinkValidator } from './youtubeLinkValidator'

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
  export class TestComponent {

    constructor() { }
        formdata:FormGroup=new FormGroup({})
    testinput!:string
    ngOnInit(): void {

    this.formdata=new FormGroup({
      // email:new FormControl("",[Validators.required,Validators.email]),
      // email: new FormControl("", [Validators.required, youtubeLinkValidator]),
      email: new FormControl("", [Validators.required, this.youtubeLinkValidator]),
      password:new FormControl("",[Validators.minLength(10)])
      })};  
    

    checkval(){
        if(this.formdata.valid)
        alert("valid")
        else
        alert("not valid")}


        youtubeLinkValidator(control: FormControl): { [key: string]: boolean } | null {
          if (!control.value) {
            return null; // Allow empty values
          }
        
          // Regular expression to match YouTube video URLs
          const youtubeRegex = /^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/
        
          if (!youtubeRegex.test(control.value)) {
            return { youtubeLink: true }; // Return an error object if the link is not a valid YouTube video link
          }
        
          return null; // Return null if the link is valid
        }

    
    
}
