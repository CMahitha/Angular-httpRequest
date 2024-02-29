import { Component } from '@angular/core';
import { Observable, of, map, filter } from 'rxjs';
@Component({
  selector: 'app-observable-demo',
  standalone: true,
  imports: [],
  templateUrl: './observable-demo.component.html',
  styleUrl: './observable-demo.component.css'
})
export class ObservableDemoComponent {
/*
myObservable=new Observable((observable)=>{
  console.log("observable starts")
  setTimeout(()=>{observable.next(10)},1000)
  setTimeout(()=>{observable.next(30)},2000)
  setTimeout(()=>{observable.next(40)},6000)
}) 
*/

/*
myObservable=of(1,2,3,5,6)
myObserver={
  next:(value:number)=>console.log(value),
  error:(err:Error)=>console.log(err),
  compile:()=>console.log("completed the data sending")  //if no error, it prints
}  
*/

//operators of rxjs
//namesarray=['ram', 'sita']
//myObservable=from(this.namesarray)

/* values=of(2,3,4)
result=this.values.pipe(map(number=>number*3),
filter(number=>number<15)
)  */

 /*myObservable=new Observable((observer)=>{
  observer.next(20);
  observer.next(30);
  observer.error("Error occured");
}) 

myObservable1=new Observable((observable)=>{
  let i=10;
  if(i>=30){
    observable.next(i)
  }
}) */


constructor(){
  //this.myObservable.subscribe((val)=>{console.log(val)})
 // this.myObservable.subscribe({next:(data)=>{console.log(data)},complete:()=>{console.log("completed")}})
 // this.myObservable.subscribe({next:(num)=>{console.log(num)},complete:()=>{console.log("completed")}})
//this.myObservable.subscribe()
//this.result.subscribe(value=>console.log(value))
//this.myObservable.pipe(catchError((error)=>{return(data)=>{console.log(data)}))

}
}
