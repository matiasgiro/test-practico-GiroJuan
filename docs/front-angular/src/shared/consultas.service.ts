import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient,
              private errorHandler: ErrorHandler,) {

  }
  public obtenerItems(search:string): Observable<any>  {
    return this.http.get<any>('http://localhost:9898/api/items/' + search).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(e => {
        return throwError('Lo sentimos intente nuevamente.');
      })
    );
  }
  public obtenerItem(id:any): Observable<any>  {
    return this.http.get<any>('http://localhost:9898/api/item/' + id).pipe(
      map((res: any) => {
        return res;
      }),
      catchError(e => {
        return throwError('Lo sentimos intente nuevamente.');
      })
    );
  }
}
