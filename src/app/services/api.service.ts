import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError,Observable, map, catchError  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string):Observable<any[]>{
    const url = `https://api.github.com/users/${githubUsername}/repos`;
   return this.httpClient.get<any[]>(url)
}


getUserRepositories(githubUsername: string): Observable<any> {
  const url = `https://api.github.com/users/${githubUsername}`;
  return this.httpClient.get<any>(url);
}

getRepoLanguages(githubUsername: string, repoName: string): Observable<any> {
  const url = `https://api.github.com/repos/${githubUsername}/${repoName}/languages`;
  return this.httpClient.get<any>(url);
}

}
