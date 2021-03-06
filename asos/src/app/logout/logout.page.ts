import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore'
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(
		private router: Router, 
	
		private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  logOut() {
		localStorage.removeItem("email");
		localStorage.removeItem("isUser");
		this.router.navigate(["/login"]);
	  }
  

}
