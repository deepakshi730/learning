import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '@ansys/awc-angular/buttons';
import { BorderRadius, ElevationSize } from '@ansys/awc-angular/core';
import { AWCListItem } from '@ansys/awc-angular/lists';
import { PopoutComponent, PopoutDirection } from '@ansys/awc-angular/popups';
import { AmazonService } from '../../amazon.service';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.css'],
})
export class MobilePhonesComponent {
  mobileBrandItems: AWCListItem[] = [];
  mobileModelItems: AWCListItem[] = [];
  phoneDetails: AWCListItem[] = [];
  @ViewChild('popoutRef', {static: true}) public popoutRef!: PopoutComponent;
  @ViewChild('btnRef', { read: ElementRef } ) public btnRef!:ElementRef;
  brand = '';
  model = '';
  bSelected: boolean = false;
  mdisable: boolean = true;

  popoutDirection: PopoutDirection = PopoutDirection.TOP;
  popoutBorderRadius: BorderRadius = BorderRadius.LARGE;
  popoutElevation: ElevationSize = ElevationSize.LARGE;

  constructor(private amazon: AmazonService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.amazon.getMobileBrands().subscribe((x) => {
      this.mobileBrandItems = x.data;
    });
  }

  brandSelected(event: any) {
    this.mdisable = false;
    this.brand = event[0].text;
    this.amazon.getMobileModels(this.brand).subscribe((x) => {
      this.mobileModelItems = x.data;
    });
  }

  modelSelected(event: any) {
    this.model = event[0].text;
    this.amazon
      .getMobileSpecifications(this.brand, this.model)
      .subscribe((item) => {
        //console.log(item);
        this.phoneDetails = [
          {
            id: item.brand,
            text: 'Brand: ' + item.brand,
          },
          {
            id:item.model,
            text: 'Model: ' + item.model,
          },
          {
            id: item.launchStatus,
            text: 'Launch: ' + item.launchStatus,
          },
          {
            id: item.display,
            text: 'Display: ' + item.display,
          },
          {
            id: item.memory,
            text: 'Memory: ' + item.memory,
          }
        ];
      });
  }

  showImage(event:any){
    console.log(event);
    setTimeout(() => {
      console.log("hiii");
      this.popoutRef.setAnchor(this.btnRef.nativeElement);
      this.popoutRef.open();
    }, 100);
  }
  
}
