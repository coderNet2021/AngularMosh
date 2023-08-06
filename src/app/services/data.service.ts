import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators'
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(@Inject(String) private url: string, private httpClient :HttpClient ) { }

  //private url='';//='http://jsonplaceholder.typicode.com/posts';

  getAll(){
    return this.httpClient.get<any[]>(this.url).pipe(map(response=>response))
    .pipe(catchError(this.handleError));
  }

  create(ressource:any){
    return this.httpClient.post<any>(this.url,ressource).pipe(map(response=>response)).pipe(catchError(this.handleError));
  }

  update(ressource:any){
    return this.httpClient.patch<any>(this.url+'/'+ressource.id,{isRead:true}).pipe(map(response=>response)).pipe(catchError(this.handleError));
  }

  delete(id:any){
return this.httpClient.delete<any>(this.url+'/'+id).pipe(map(response=>response)).pipe(catchError(this.handleError));
}


private handleError(error: HttpErrorResponse){

    if (error.status===400)
    return throwError(()=> {
    new BadInput(error);
    });

    if (error.status===404)
      return throwError(()=> {
      new NotFoundError();
      });

    return throwError(() => {new AppError(error ); console.log('test here')});

}

}
