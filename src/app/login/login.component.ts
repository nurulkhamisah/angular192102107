import { Component, OnInit, Renderer2 } from '@angular/core';
import { OnSameUrlNavigation } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnInit(): void {}
}
