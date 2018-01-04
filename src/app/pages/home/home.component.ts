import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) {
    title.setTitle('Your Title Here')

    meta.addTags([
      { name: 'author',   content: 'Your Name Here'},
      { name: 'keywords', content: 'angular, angular universal'},
      { name: 'description', content: 'Angular Universal Seeder (Lazy Load Ready , HMR, SCSS)' }
    ])
  }

  ngOnInit() {
  }

}
