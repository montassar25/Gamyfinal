import {Component, NgModule} from '@angular/core';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import {BrowserModule} from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserModule,

    FormsModule      // <----------make sure you have added this.
  ],
})
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {



  constructor(private  http: HttpClient) {

  }
  onSubmit(f: NgForm) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };


    console.log(JSON.stringify(f.value));
    return this.http.post('http://localhost:8080/register', f.value, httpOptions);
    console.log(this.http.post('http://localhost:8080/register', f.value, httpOptions));
  }
}

