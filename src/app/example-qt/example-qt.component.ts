import { Component } from '@angular/core';
import content1 from "../../assets/libdomain-qt-sample1.txt";
import content2 from "../../assets/libdomain-qt-sample2.txt";
@Component({
  selector: 'app-example-qt',
  standalone: true,
  imports: [],
  templateUrl: './example-qt.component.html',
  styleUrl: './example-qt.component.scss'
})
export class ExampleQtComponent {
  classPreview1 = content1
  classPreview2 = content2
}
