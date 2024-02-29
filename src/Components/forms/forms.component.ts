import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
  title='AngularHttpRequest';
/*
user:any={
  userName:'',
  password:'',
  email:''
}
*/
onSubmit(  details: {name: string, mail: string, pwd: string}){
  console.log(details);
  //alert("Successfully Registered")
//  console.log(this.user)
}
}
