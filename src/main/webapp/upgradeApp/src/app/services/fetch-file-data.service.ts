import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';	

@Injectable()
export class FetchFileDataService {

  private fileUrl = 'api/heroes';
  constructor(
  private http: HttpClient
  ) {}
  
  getFileData(name : string): Observable<any[]> {
  	const url = '${this.fileUrl}/${name}'
  	 return this.http.get<any[]>(url);
  	 //.pipe(
  	 	//catchError(this.handleError('getFileData',[]))
  	 //);

  }
  


}
