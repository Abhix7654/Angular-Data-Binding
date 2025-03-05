import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Data_Binding';

  imgUrl = "assets/BL_logo_square_jpg.jpg"; 

  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }
}
