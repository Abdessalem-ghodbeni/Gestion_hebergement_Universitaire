import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthLayoutRoutes } from "./auth-layout.routing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from "src/app/home/views/login/login.component";
import { RegisterComponent } from "src/app/home/views/register/register.component";
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    NgbCollapseModule,
    NgbModule,
    // NgbModule
  ],
  declarations: [LoginComponent, RegisterComponent],
})
export class AuthLayoutModule {}
