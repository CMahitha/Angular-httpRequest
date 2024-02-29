import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationService } from '../calculation.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { OnInit } from '@angular/core';
import { ReactiveFormsComponent } from '../Components/reactive-forms/reactive-forms.component';
//import { FormsModule } from '@angular/forms';
import { FormsComponent } from '../Components/forms/forms.component';
import { HelloComponent } from '../hello/hello.component';
import { PostsComponent } from '../posts/posts.component';
import { ObservableDemoComponent } from '../Components/observable-demo/observable-demo.component';
import { RouterOutlet, RouterModule } from '@angular/router';
//import { YouTubePlayerModule } from '@angular/youtube-player';
import { ReqresComponent } from '../reqres/reqres.component';
import {  ReactiveFormsModule} from '@angular/forms';
//import { YoutubePlayerComponent } from '../Components/youtube-player/youtube-player.component';
import { LazyDemoComponent } from '../Components/lazy-demo/lazy-demo.component';
import { RouterDemoComponent } from '../Components/router-demo/router-demo.component';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,  
    ReactiveFormsComponent,FormsComponent, RouterModule, RouterOutlet, 
     ReactiveFormsModule, LazyDemoComponent, ReqresComponent, PostsComponent, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
 
  providers: []
 
})
export class AppComponent {
 title = 'my-app';

 // onSubmit(details: {name: string, mail: string, pwd: string}){
//console.log(details);
  //}
 /* constructor(private calculationService: CalculationService) { }

  addNumbers(a: number, b: number): void {
    this.calculationService.addNumbers(a, b)
      .subscribe(result => {
       // this.result = result;
      }); 
  } */
}
