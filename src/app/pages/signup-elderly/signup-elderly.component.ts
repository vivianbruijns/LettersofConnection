import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-elderly',
  imports: [FormsModule],
  templateUrl: './signup-elderly.component.html',
  styleUrl: './signup-elderly.component.scss'
})
export class SignupElderlyComponent {
  formData = {
    name: '',
    email: '',
    age: '',
    interests: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/contact-soon']);
  }
}
