import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-students',
  imports: [FormsModule],
  templateUrl: './signup-students.component.html',
  styleUrl: './signup-students.component.scss'
})
export class SignupStudentsComponent {
  formData = {
    name: '',
    email: '',
    age: '',
    school: '',
    interests: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/contact-soon']);
  }
}
