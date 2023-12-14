import { Component, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkActive, RouterModule  } from '@angular/router';
declare const PR: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLinkActive, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements AfterViewChecked {
  title = 'libdomain';
  public ngAfterViewChecked(): any {
    PR.prettyPrint();
  }
}
