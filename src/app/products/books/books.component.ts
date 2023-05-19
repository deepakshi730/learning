import { Component } from '@angular/core';
import { BorderRadius, ElevationSize, Size } from '@ansys/awc-angular/core';
import { Icons } from '@ansys/awc-angular/icons';
import { AWCListGroup, AWCListItem } from '@ansys/awc-angular/lists';
import { AmazonService } from 'src/app/amazon.service';
import { BestSellerList, BooksItem } from './types/books.types';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

  bestSellerLists: AWCListItem[] = [];
  selectedBestSeller='';
  bestSellerCardElevation: ElevationSize =ElevationSize.NONE;
  bookCardElevation: ElevationSize =ElevationSize.X_SMALL;
  bestSellerBorderRadius: BorderRadius= BorderRadius.NONE;
  cardPadding: Size = Size._5x;
  bestSeller: BestSellerList[] = [];
  bestSellerCounter: number =0;
  next_icon: Icons = Icons.ARROW_NEXT;
  showDescrip: boolean = false;

  constructor(private amazon: AmazonService) {}

  ngOnInit(){
    this.amazon.getBestSellersListName().subscribe((x) => {
      //console.log(x.data);
      this.bestSellerLists = x.data;
    })

    this.amazon.getBestSellersTop5BooksDetails().subscribe((x) => {
      console.log(x);
      console.log(x.results);
      this.bestSeller = x.results;
    })
  }

  bestSellerSelected(event: any){
    this.selectedBestSeller = event[0].id;
  }

  nextBestSeller(){
    this.bestSellerCounter += 1;
  }

  showDescription(){
    this.showDescrip = true;
  }
}
