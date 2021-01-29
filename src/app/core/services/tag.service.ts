import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  get(): Observable<any> {
    return this.httpClient.get(
      `${environment.api}/api/admin/tags`
    );
  }

  createTag(){
    this.router.navigate(['admin/tag']);
  }
}
