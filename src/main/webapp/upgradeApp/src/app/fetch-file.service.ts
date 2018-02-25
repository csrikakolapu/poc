import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { fileResponse } from '../app/common/dto/fileresponse';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/do';



@Injectable()
export class FetchFileService {
	
	private fileUrl = '/upgradeApp/app/api/getFileContent';
    constructor(private http: HttpClient) {}
  
  getFileData(name : string): Observable<fileResponse> {
  	 let url = this.fileUrl+'?fileKey='+name;
  	 return this.http.get<fileResponse>(url)
  	 		.do(data => console.log('success'))
  	 		.catch(this.handleError);
    }   

    private handleError(error:Response){
    	console.log(error);
    	let message= 'Error status code ${error.status} at ${error.url}';
    	return Observable.throw(message);
    }
   
}


