import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

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
