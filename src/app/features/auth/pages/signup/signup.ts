import { Component } from '@angular/core';
import { SignupRequest } from '../../../../shared/models/auth';
import { SignupForm } from '../../components/signup-form/signup-form';

@Component({
  imports: [SignupForm],
  selector: 'app-signup',
  styleUrl: './signup.scss',
  templateUrl: './signup.html',
})
export class Signup {

  handleSignupComplete(signupData: SignupRequest) {
    console.log('Signup data:', signupData);
  }


}
