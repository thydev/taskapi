import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the responsecopy
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }

  getTask(id: string) {
    return this._http.get('/tasks/' + id);
  }

  addTask(newtask){
    return this._http.post('/tasks', newtask);
  }

  updateTask(id: string, newtask){
    return this._http.put('/tasks/' + id, newtask, 
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  deleteTask(id: string){
    return this._http.delete('/tasks/' + id);
  }
}
