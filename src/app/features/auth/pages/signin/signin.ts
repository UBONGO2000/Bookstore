import { Component } from '@angular/core';
import { SigninRequest } from '../../../../shared/models/auth';
import { SigninForm } from '../../components/signin-form/signin-form';

@Component({
  imports: [SigninForm],
  selector: 'app-signin',
  styleUrl: './signin.scss',
  templateUrl: './signin.html',
})
export class Signin {

  handleSigninComplete(signinData: SigninRequest) {
    console.log('Signin data:', signinData);
  }

}
