import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Role } from "src/app/models/Role/role.enum";
import { AutentificationService } from "src/app/services/authentification/autentification.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private _authentification: AutentificationService,
    private _route: Router
  ) {}

  ngOnInit() {}

  LoginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", Validators.required),
  });

  seConnecter() {
    const paload = {
      email: this.LoginForm.value.email || "",
      password: this.LoginForm.value.password || "",
    };
    if (this.LoginForm.valid) {
      this._authentification.Login(paload).subscribe({
        next: (data: any) => {
          if (data && data.userDetails && data.userDetails.enabled) {
            Swal.fire({
              icon: "success",
              title: "success",
              text: "Welcome to your account ",
            });

            localStorage.setItem(
              "userconnect",
              JSON.stringify(data.userDetails)
            );
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("state", "0");
            if (data.userDetails.role === Role.ETUDIANT) {
              this._route.navigateByUrl("/etudiant");
            } else {
              this._route.navigateByUrl("/admin");
            }
          }
        },
        error: () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Data!",
      });
    }
  }
}
