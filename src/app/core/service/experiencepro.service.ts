import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Experiencepro } from "./experiencepro";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ExperienceproService {
  url = "http://localhost:3000/entreprise/";

  constructor(private http: HttpClient) {}

  getAllEntreprises(): Observable<Experiencepro[]> {
    return this.http.get<Experiencepro[]>(this.url);
  }
  getEntrepriseById(entrepriseId: number): Observable<Experiencepro> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http
      .get<Experiencepro>(this.url + entrepriseId.toString(), httpOptions)
      .pipe(
        tap(_ => console.log(`fetched experiencepro id=${entrepriseId}`)),
        catchError(
          this.handleError<Experiencepro>(`getEntreprise id=${entrepriseId}`)
        )
      );
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

  createEntreprise(experiencepro: Experiencepro): Observable<Experiencepro> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.post<Experiencepro>(this.url, experiencepro, httpOptions);
  }

  // updateEntreprise(experiencepro: Experiencepro): Observable<Experiencepro> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json"
  //     })
  //   };

  //   const entrepriseId = entreprise.id;

  //   return this.http.put<Experiencepro>(
  //     this.url + entrepriseId.toString(),
  //     experiencepro,
  //     httpOptions
  //   );
  // }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
