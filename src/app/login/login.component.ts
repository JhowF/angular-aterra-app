import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { LoginModel } from './login.model';
import dados from './dados/dados.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup<any>;
  model!: LoginModel;

  constructor(private fb: FormBuilder, private router: Router) {
    this.model = new LoginModel();
    this.formGroup = this.fb.group(this.model);
  }

  initValidators() {
    this.formGroup.controls.userName.setValidators([
      Validators.required,
      Validators.email,
    ]);
    this.formGroup.controls.password.setValidators([
      Validators.required,
      Validators.maxLength(6),
    ]);
  }

  ngOnInit() {
    this.initValidators();
  }

  logado = ``;

  async submit() {
    let dadosJson = dados.Usuarios;
    let existe = false;
    if (this.formGroup.valid)
      for (let valor in dadosJson) {
        this.formGroup.value.userName === dadosJson[valor].loginName &&
        this.formGroup.value.password === dadosJson[valor].loginCode &&
        this.formGroup.valid
          ? (existe = true)
          : ``;
      }
    else {
      console.log(`Verifique os campos digitados`);
    }

    existe
      ? this.router.navigate(['/login'])
      : console.log(`Esse usuario esta invalido`);

    // console.log(dados.Usuarios[0].loginName);
  }
}
