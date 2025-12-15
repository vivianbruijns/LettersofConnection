import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup-elderly',
  imports: [FormsModule, CommonModule],
  templateUrl: './signup-elderly.component.html',
  styleUrl: './signup-elderly.component.scss'
})
export class SignupElderlyComponent {
  currentStep = 1;

  formData = {
    name: '',
    age: '',
    city: '',
    nursingHome: '',
    email: '',
    interests: ''
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
