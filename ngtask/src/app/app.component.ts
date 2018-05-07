import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [];
  task = {};
  newTask: any;
  editTask: any;
  isEditTask = false;

  title = 'Restful Task API';
  constructor(private _httpService: HttpService) {

  }

  ngOnInit(){
    this.getTaskFromService();
    this.newTask = { title: "", description: "" }
  }

  getTaskFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log(data);
      this.tasks = data['data'];
    });
  }

  getTaskById(id: string) {
    let obsTask = this._httpService.getTask(id);
    obsTask.subscribe(data => {
      console.log(data);
      this.task = data['data'];
    });
  }

  deleteTaskById(id: string) {
    let obsTask = this._httpService.deleteTask(id);
    obsTask.subscribe(data => {
      console.log(data);
      this.task = data['data'];
    });
  }

  udpateTaskById(aTask) {
    let obsTask = this._httpService.updateTask(aTask.id, aTask);
    obsTask.subscribe(data => {
      console.log(data);
      this.editTask = {}
      this.isEditTask = false;
      this.getTaskFromService();
    });
  }

  btnGetAllTask(): void{
    console.log("clicked")
    this.getTaskFromService();
  }

  btnShowTask(id: string): void {
    console.log(id);
    this.getTaskById(id);
  }

  btnEditTask(id: string): void {
    let obsTask = this._httpService.getTask(id);
    obsTask.subscribe(data => {
      this.isEditTask = true;
      console.log(data);
      this.editTask = {id: data['data'][0]['_id'] ,title: data['data'][0]['title'], description: data['data'][0]['description']};

    });
  }

  btnDeleteTask(id: string): void {
    let obsTask = this._httpService.deleteTask(id);
    obsTask.subscribe(data => {
      this.isEditTask = false;
      console.log(data);
      this.getTaskFromService();
    });
  }

  btnCancelUpdate(): void {
    this.editTask = {};
    this.isEditTask = false;
  }

  onUpdate() {
    this.udpateTaskById(this.editTask);
  }

  addTask(aTask: any) {
    let obsTask = this._httpService.addTask(aTask);
    obsTask.subscribe(data => {
      console.log("back from creating", data);
      this.getTaskFromService();
    });
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    this.addTask(this.newTask)
    // Reset this.newTask to a new, clean object.
    this.newTask = { title: "", description: "" }
  }
}
