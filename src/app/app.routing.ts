import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { HomeLayoutComponent } from "./home/home-layout/home-layout.component";
import { LayoutEtudiantComponent } from "./layouts/etudiant/layout-etudiant/layout-etudiant.component";
import { LoginComponent } from "./home/views/login/login.component";
import { RegisterComponent } from "./home/views/register/register.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeLayoutComponent,
  },

  {
    path: "admin",
    component: AdminLayoutComponent,

    loadChildren: () =>
      import("src/app/layouts/admin-layout/admin-layout.module").then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("src/app/layouts/auth-layout/auth-layout.module").then(
            (m) => m.AuthLayoutModule
          ),
      },
    ],
  },
  {
    path: "etudiant",
    component: LayoutEtudiantComponent,
    loadChildren: () =>
      import("./layouts/etudiant/etudiant.module").then(
        (e) => e.EtudiantModule
      ),
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  // {
  //   path: "**",
  //   redirectTo: "dashboard",
  // },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
    }),
  ],
  exports: [],
})
export class AppRoutingModule {}
