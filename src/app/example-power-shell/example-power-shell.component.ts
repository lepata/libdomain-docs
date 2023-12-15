import { Component } from '@angular/core';
import content1 from "../../assets/libdomain-powershell-sample1.txt";
import content2 from "../../assets/libdomain-powershell-sample2.txt";
import content3 from "../../assets/libdomain-powershell-sample3.txt";

@Component({
  selector: 'app-example-power-shell',
  standalone: true,
  imports: [],
  templateUrl: './example-power-shell.component.html',
  styleUrl: './example-power-shell.component.scss'
})
export class ExamplePowerShellComponent {
  classPreview1 = content1
  classPreview2 = content2
  classPreview3 = content3
}
