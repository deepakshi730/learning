import { Component } from '@angular/core';
import { AmazonService } from 'src/app/amazon.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  constructor(private amazon: AmazonService) {}

  ngOnInit(){
    this.amazon.getBestSellersListName().subscribe((x) => {
      console.log(x.data);
    })
  }
}
