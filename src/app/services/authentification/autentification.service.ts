import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Payload } from "src/app/models/Payload/payload";

@Injectable({
  providedIn: "root",
})
export class AutentificationService {
  private apiUrl = environment.baseUrl;
  constructor(private _http: HttpClient) {}

  Login(payload: Payload) {
    return this._http.post(`${this.apiUrl}/auth/login`, payload);
  }
}
