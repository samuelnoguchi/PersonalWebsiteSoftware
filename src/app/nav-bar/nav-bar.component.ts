import { Component, OnInit } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public show = false;
  public innerHeight: any;
  public innerWidth: any;
  public darkTheme = false;

  constructor() { }

  ngOnInit() {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }

  toggleCollapse(){
    this.show = !this.show;
  }

  scroll(num: number) {
    const home = document.querySelector('#splash');
    const products = document.querySelector('#about');
    const info = document.querySelector('#projects');
    const contact = document.querySelector('#contact');

    if(num == 0){
      home.scrollIntoView({ behavior: "smooth", block: "start" });
    }else if(num==1){
      products.scrollIntoView({ behavior: "smooth", block: "start" });
    }else if(num==2){
      info.scrollIntoView({ behavior: "smooth", block: "start" });
    }else if(num==3){
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }

  
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > this.innerHeight-80) {
      this.darkTheme = true;
    }else{
      this.darkTheme = false;
    } 
  }
}
