import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        name: ['Joaquim', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email : ['joaquim@gmail.com', [Validators.required, Validators.email]],
        type: ['1', [Validators.required]],
        cpfOrCnpj: ['06134596280', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        password: ['123', [Validators.required]],
        publicPlace: ['Rua Via', [Validators.required]],
        number: ['25', [Validators.required]],
        complement: ['Apto 3', []],
        district: ['Copacabana', []],
        cep: ['10828333', [Validators.required]],
        phone1: ['977261827', [Validators.required]],
        phone2: ['', []],
        phone3: ['', []],
        stateId: [null, [Validators.required]],
        cityId: [null, [Validators.required]]
      });
  }

  signupUser() {
    console.log("enviou o form");
  }
}
