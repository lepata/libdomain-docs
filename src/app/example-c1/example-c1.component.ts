import { Component } from '@angular/core';
import contents from "../../assets/libdomain-c-sample.txt";

@Component({
  selector: 'app-example-c1',
  standalone: true,
  imports: [],
  templateUrl: './example-c1.component.html',
  styleUrl: './example-c1.component.scss'
})
export class ExampleC1Component {
  classPreview = contents

}
