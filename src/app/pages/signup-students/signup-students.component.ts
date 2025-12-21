import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-students',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-students.component.html',
  styleUrl: './signup-students.component.scss'
})
export class SignupStudentsComponent {
  currentStep = 1;

  formData = {
    name: '',
    age: '',
    grade: '',
    school: '',
    city: '',
    interests: '',
    hobby: '',
    favoriteSubject: '',
    contact: ''
  };

  constructor(private router: Router) {}

  goToNextStep() {
    this.currentStep = 2;
  }

  goToPreviousStep() {
    this.currentStep = 1;
  }

  onSubmit() {
    this.router.navigate(['/contact-soon']);
  }
}
