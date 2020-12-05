import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService, StorageType } from '../common/storage.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /*Formulario de login */
  public loginFormControl: FormGroup;


  public hidePassword: boolean;

  /**
   * 
   * @param router 
   * @param route 
   * @param loginService 
   * @param storageService 
   */
  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService, private storageService: StorageService) { }

  ngOnInit() {

    this.hidePassword = true;

    // Inicializacion del formulario para la autenticacion
    this.loginFormControl = new FormGroup(
      {

         emailControl: new FormControl('', [Validators.required, Validators.email]),
         passwordControl: new FormControl('', [Validators.required, ])

      });
  }

  /**
   * Evento que se dispara cuando se hace click en el boton submit
   */
  onSubmit() {

    const username = this.loginFormControl.get('emailControl').value;
    const password = this.loginFormControl.get('passwordControl').value;
    this.loginService.login(username, password)
    .subscribe( {
      next: loginResult => {
        console.log(loginResult);
        if (loginResult != null && loginResult != undefined && loginResult.sucess) {
          // Se guarda el usuario en la sesion
          this.storageService.store('currentUser', JSON.stringify({loginResult}), StorageType.Session);
          // Se guarda el lenguaje elegido por el usuario
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          console.log(returnUrl);
          this.router.navigate([returnUrl]);
        } else {

        }

      },
      error: error => {
        console.log(error);
        if (error != null && error.error != null ) {

          // Error desconocido o error interno en el servidor
          if (error.error.status === 0 || error.error.status === 500) {
            this.loginFormControl.setErrors({ unknowError: true });

          } else if (error.error.status === 401) {
            this.loginFormControl.setErrors({ invalidCredentials: true });

          }
        }

      }

    } );

  }

}
