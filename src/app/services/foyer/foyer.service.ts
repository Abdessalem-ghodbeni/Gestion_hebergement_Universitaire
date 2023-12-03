import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Foyer } from "src/app/models/Foyer/foyer";
@Injectable({
  providedIn: "root",
})
export class FoyerService {
  private apiUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  getAllFoyer() {
    return this._http.get(this.apiUrl + "/api/logement/get/all_foyes");
  }
  getFoyerById(id: number) {
    return this._http.get(`${this.apiUrl}/api/logement/get/foyer/` + id);
  }

  editFoyer(foyer: Foyer) {
    return this._http.put(`${this.apiUrl}/api/logement/edit`, foyer);
  }
}
