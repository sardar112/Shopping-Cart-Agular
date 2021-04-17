import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
constructor(private fb : FormBuilder) { }
loginForm: FormGroup;
ngOnInit(): void {
    this.loginForm = this.fb.group({
   
    email:['',Validators.required],
    password:['',Validators.required],
    
  })
}
onSubmit(){
   console.log(this.loginForm.value)
 }

}
