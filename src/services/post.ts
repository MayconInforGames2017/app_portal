import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class Post {
    serve: string = 'localhost/apiPortal/';

    constructor(private http: HttpClient) {

    }

    dadosApi(dados: any, api: string) {
        const HttpOptions = {
            headers: new HttpHeaders({'Content-Type' : 'application/json'})
        }

        let url = this.serve + api;
        return this.http.post(url, JSON.stringify(dados), HttpOptions).map(res => res); 
    }
}