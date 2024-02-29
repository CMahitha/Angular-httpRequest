import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-reqres',
  standalone: true,
  imports: [ ReactiveFormsModule],
  templateUrl: './reqres.component.html',
  styleUrl: './reqres.component.css'
})
export class ReqresComponent implements OnInit {

  postForm: FormGroup;

  constructor() { }
  
  ngOnInit(): void{
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    })
  }
  
  onCreatePost(){
    console.log(this.postForm.value);
  }
}
