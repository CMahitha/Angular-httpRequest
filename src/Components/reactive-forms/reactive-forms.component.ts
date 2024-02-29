import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {
registeredForm:FormGroup<any>
submitted:boolean=false
constructor(private formBuilder:FormBuilder){
this.registeredForm=this.formBuilder.group({
  firstName:['',Validators.required],
addr1:['',Validators.required],
addr2:[''],
city:['',Validators.required],
country:['',Validators.required],
zip:['',Validators.required]
})
}
onSubmit(){
console.log(this.registeredForm)
}
}
