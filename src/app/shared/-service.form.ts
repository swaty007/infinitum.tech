import { Injectable } from '@angular/core';
import { Http  } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {  Headers, RequestOptions, Response, URLSearchParams} from  "@angular/http";

@Injectable()
export class ServiceForm {

  constructor(private http:Http) { }

  postData(obj){
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
    let options = new RequestOptions({headers: headers});
    let serializedForm = this.serialize(obj);

    return this.http.post('assets/form.php', serializedForm , options)
        // .map(response => response.json())

        // .map(function(data:Response){console.log('MOYA SYKA DATA',data)})
        // .map(function(data:Response){data.text()}) //ответ тут от сервера
        .catch((error:any) => {console.log('errOr',error); return Observable.throw(error);})
        // .subscribe(
        //     (data) => {console.log('dataAlexServise',data);}
        // );
  }

  /**
   * Serializes the form element so it can be passed to the back end through the url.
   * The objects properties are the keys and the objects values are the values.
   * ex: { "a":1, "b":2, "c":3 } would look like ?a=1&b=2&c=3
   * @param  {SystemSetup} obj - The system setup to be url encoded
   * @returns URLSearchParams - The url encoded system setup
   */
  serialize(obj): URLSearchParams {
    let params: URLSearchParams = new URLSearchParams();

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var element = obj[key];

        params.set(key, element);
      }
    }
    return params;
  }
}
