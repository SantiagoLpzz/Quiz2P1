import { Component } from '@angular/core';
import { ChuckNorrisService } from '../chuck-norris.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  joke: any;
  categories: any;

  constructor(private chuckservice: ChuckNorrisService) {}

  ngOnInit(){
    this.chuckservice.getRandomJoke().subscribe((data) => {
      this.joke = data;
      console.log(data);
    })

    this.chuckservice.getCategories().subscribe((data) => {
      this.categories = data;
    })
  }
}
