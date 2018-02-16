import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FetchFileService {
	
	private fileUrl = 'api/getFileContent';
    constructor(private http: HttpClient) {}
  
  getFileData(name : string): Observable<any[]> {
  	 let url = this.fileUrl+'?fileKey='+name
  	 return this.http.get<any[]>(url);
  }
}


