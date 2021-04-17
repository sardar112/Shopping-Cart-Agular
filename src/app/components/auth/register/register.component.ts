import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 
constructor(private fb : FormBuilder) { }
  regForm: FormGroup;
  ngOnInit(): void {
      this.regForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      phone:['',Validators.required],
    })
  }
  onSubmit(){
     console.log(this.regForm.value)
   }




// function passwordsMatchValidator(form) {
//   const password = form.get('password')
//   const confirmPassword = form.get('confirmPassword')

//   if(password.value !== confirmPassword.value) {
//     confirmPassword.setErrors({ passwordsMatch: true })
//   } else {
//     confirmPassword.setErrors(null)
//   }

//   return null
// }
}
