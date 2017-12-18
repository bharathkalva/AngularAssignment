import { Component } from '@angular/core';
import {task} from './task';
import {firstCapital} from './firstLetterCapital.pipe';
import { ChildComponent } from './child';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})
export class AppComponent {
  public List:task[] = [
    {id:1,title:'brushing',description:'use brush'},
    {id:2,title:'brushing',description:'use brush'}
  ];
  public  view:boolean = false;
  public Add:boolean = false;
  public isTitle:boolean = false;
  public parentData:string;
  public message:string;
  public counter:number=2;
  public messageStatus:boolean = false;
  
  outputData(item:task):void {
    for(var key=0;key<this.List.length;key++){
      if(this.List[key].id==item.id) {
        this.List[key].title = item.title;
        this.List[key].description = item.description;
      }
    }
    this.view = false;
  }

  messageData(item:string):void {
    this.messageStatus=true;
    this.message = item;
  }
  
  onAdd():void{
    this.Add= true;
  }
  
  isEmpty(title:string,description:string,SaveButton:any){
    if(title.length==0||description.length==0) SaveButton.disabled = true;
    else SaveButton.disabled = false;
  }

  onCancel():void{
    this.Add= false;
  }
  
  public index:task;
  public clickedTask:task;

  onSelect(index: task): void {
     this.view = true;
     this.clickedTask=index;
  }
  onSubmit(ind: task): void {
    this.counter += 1;
    ind.id = this.counter;
    this.List.push(ind);
    this.Add = false;
  }

  onDelete(index: number): void {
    for(var key=0;key<this.List.length;key++) {
      if(this.List[key].id==index) this.List.splice(key, 1);
    }
    
    this.view = false;
  }

}
