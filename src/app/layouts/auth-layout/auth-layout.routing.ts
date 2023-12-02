import { Routes } from "@angular/router";

import { LoginComponent } from "../../home/views/login/login.component";
import { RegisterComponent } from "../../home/views/register/register.component";

export const AuthLayoutRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];
