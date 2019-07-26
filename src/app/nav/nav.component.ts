import { Component, OnInit, HostListener } from "@angular/core";
import { linksAnimation } from "./links-animation.animation";
import { toggleNavAnimation } from "./toggle-nav.animation";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
  animations: [linksAnimation, toggleNavAnimation]
})
export class NavComponent implements OnInit {
  navLinks: Array<any>;
  isNavActive = false;
  isToggle = false;
  isNavOpen: boolean;
  innerWidth: number;

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    if (event.target.innerWidth < 768) {
      this.navLinks = [];
      this.isNavOpen = true;
    } else {
      this.navLinks = ["Home", "About", "Work", "Projects"];
      this.isNavOpen = false;
    }
  }

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.navLinks =
      this.innerWidth < 768 ? [] : ["Home", "About", "Work", "Projects"];
    this.isNavOpen = this.innerWidth < 768 ? true : false;
  }

  activateNav() {
    this.isNavActive = !this.isNavActive;
  }

  toggle() {
    this.navLinks.length ? this.hideLinks() : this.showLinks();
    this.isToggle = !this.isToggle;
    this.isNavOpen = !this.isNavOpen;
  }

  showLinks() {
    this.navLinks = ["Home", "About", "Work", "Projects"];
  }

  hideLinks() {
    this.navLinks = [];
  }
}
