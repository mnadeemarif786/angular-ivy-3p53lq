import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  _header: string = "Post a task";

  logo_link = [{ href: "http://localhost:4200/" }];

  left_menus = [
    { href: "", text: "Categories", class: "uper-line nav-link" },

    { href: "/tasks", text: "Browse tasks", class: "uper-line nav-link" },

    { href: "/how-it-works", text: "How it works", class: "uper-line nav-link" }
  ];
  right_menus = [
    { href: "/sign-up", text: "Sign Up", class: "nav-link sign-up" },

    { href: "/login", text: "Login", class: "nav-link login" },

    { href: "/earn-money", text: "Become a Tasker", class: "nav-link tasker" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
