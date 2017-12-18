import { Component, OnInit,EventEmitter } from '@angular/core';
import {task} from './task';

@Component({
    selector: 'app-child',
    templateUrl: './child.html',
    inputs: ['data'],
    outputs: ['childEvent','messageEvent','deleteEvent'] 
  })
  export class ChildComponent implements OnInit {
    data: any;
    constructor(){}
    childEvent = new EventEmitter<task>();
    messageEvent = new EventEmitter<string>();
    deleteEvent = new EventEmitter<number>();
    
    ngOnInit(){
        console.log(this.data);
    }
    
    onSubmit(ind: task): void {
      ind.id = this.data.id;
      this.childEvent.emit(ind);
      this.messageEvent.emit("Task is Saved");
    }

    onDelete(id:number): void {
      this.messageEvent.emit("Task is Deleted");
      this.deleteEvent.emit(id);
      
    }




  }  