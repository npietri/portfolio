import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Experience } from './experience';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

 // url = 'https://localhost:5001/api/experience/';
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }






  getAllExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.url);
  }

  getExperienceById(experienceId: number): Observable<Experience> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Experience>(this.url + experienceId.toString(), httpOptions)
      .pipe(
        tap(_ => console.log(`fetched  experience id=${experienceId}`)),
        catchError(this.handleError<Experience>(`getExperience id=${experienceId}`))
      );
  }

  createExperience(experience: Experience): Observable<Experience> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Experience>(this.url, experience, httpOptions);
  }

  updateExperience(experience: Experience): Observable<Experience> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const experienceId = experience.id;

    return this.http.put<Experience>(this.url + experienceId.toString(), experience, httpOptions);
  }

  deleteExperience(experienceId: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<number>(this.url + experienceId.toString(), httpOptions);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}