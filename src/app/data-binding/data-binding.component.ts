import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule ],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  count=0;

  registerDetails= new FormGroup({
    'name':new FormControl(''),
    'email': new FormControl(''),
    'dob': new FormControl(''),    
  });

  onSubmit(){
    console.log("object:", this.registerDetails.value);
    this.count++;
    console.log(this.count);
  }
  onClear(){
    this.registerDetails.reset();
  }
}
