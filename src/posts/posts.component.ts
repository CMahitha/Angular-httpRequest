import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent  {
  postForm: FormGroup;

constructor(private http: HttpClient) { }

ngOnInit(): void{
  this.postForm = new FormGroup({
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required),
  })
}

onCreatePost(){
  const postData = this.postForm.value;
  this.http.post('https://angularproject-cd502-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
    console.log(response);
  });
  //console.log(this.postForm.value);
}
}
