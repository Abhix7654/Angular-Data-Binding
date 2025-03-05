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
  url ="https://www.bridgelabz.com";
  nameError: string = "";

userName: string = "";
  ngOnInit(): void {
    this.title = "Hello from Bridgelabz";
  }
  onClick($event:any){
    console.log("Save button is clicked!", $event);
    window.open(this.url, "_blank");
  }
  onInput($event:any){
    console.log("Change Event Occurred!", $event.data);
    const nameRegex = /^[A-Z]{1}[a-zA-Z\\s]{2,}$/;
    if (nameRegex.test(this.userName)) {
      this.nameError = "";
      return;
    } 
      this.nameError = "Name is Incorrect!";
  
    }
}
