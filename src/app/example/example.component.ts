import { Component } from '@angular/core';
import contents from "../../assets/libdomain-c-sample.txt";
//alert(contents);
@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {
  classPreview = contents

}
