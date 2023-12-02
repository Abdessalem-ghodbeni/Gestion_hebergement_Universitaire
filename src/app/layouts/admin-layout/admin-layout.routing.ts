import { Routes } from "@angular/router";

// import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from "./views/user-profile/user-profile.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { BlocComponent } from "./views/bloc/bloc.component";
import { DashboardComponent } from "src/app/layouts/admin-layout/views/dashboard/dashboard.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user-profile", component: UserProfileComponent },
  { path: "tables", component: TablesComponent },
  { path: "bloc", component: BlocComponent },
  //   { path: "maps", component: MapsComponent },
];
