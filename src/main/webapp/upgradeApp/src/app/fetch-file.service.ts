import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { fileResponse } from '../app/common/dto/fileresponse';

@Injectable()
export class FetchFileService {
	
	private fileUrl = '/upgradeApp/app/api/getFileContent';
    constructor(private http: HttpClient) {}
  
  getFileData(name : string): Observable<fileResponse> {
  	 let url = this.fileUrl+'?fileKey='+name
  	 let response = this.http.get<fileResponse>(url);
  	 console.log(response);
  	 return response;
  }
}


