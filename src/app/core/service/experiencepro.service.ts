import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Experiencepro } from "./experiencepro";

@Injectable({
  providedIn: "root"
})
export class ExperienceproService {
  url = "http://localhost:3000/entreprise/";

  constructor(private http: HttpClient) {}

  getAllEntreprises(): Observable<Experiencepro[]> {
    return this.http.get<Experiencepro[]>(this.url);
  }

  deleteEntreprise(entrepriseId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.delete<number>(
      this.url + entrepriseId.toString(),
      httpOptions
    );
  }
}
