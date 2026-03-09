import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  name="";
  email="";
  dob="";
  count=0;
  currentEmail(){
    console.log("email is", this.email);
  }
  onSubmit(){
    console.log("Name: ", this.email);
    console.log("Email: ", this.email);
    console.log("DOB: ", this.email);
    console.log("Save Button Clicked:", ++this.count);

  }
  onClear(){
    this.name="";
    this.email="";
    this.dob="";
  }

  onCountIncrement(n: number){
    this.count=this.count+n;
  }
}
