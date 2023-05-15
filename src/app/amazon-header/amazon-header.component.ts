import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from '@ansys/awc-angular/buttons';
import { ComponentLayout, SizeBreakpoint } from '@ansys/awc-angular/core';
import { InputPrefixSuffix } from '@ansys/awc-angular/forms';
import { Icons } from '@ansys/awc-angular/icons';
import { AWCMenuGroup, AWCMenuItem, MenuBarDisplay, MenuComponent } from '@ansys/awc-angular/menus';
import { PopoutDirection } from '@ansys/awc-angular/popups';

@Component({
  selector: 'app-amazon-header',
  templateUrl: './amazon-header.component.html',
  styleUrls: ['./amazon-header.component.css'],
})
export class AmazonHeaderComponent {
  icon = Icons.AMAZON;
  icon_size = SizeBreakpoint.MD;
  search_disabled = false;
  search_placeholder = 'Search Ansys Amazon.in';
  // search_icon= {'icon':Icons.SEARCH};
  search_icon_suffix: InputPrefixSuffix = { value: Icons.SEARCH, type: 'icon' };
  cart_icon: Icons = Icons.ADD;
  cart_text: string = 'Cart';
  login_text: string = 'Hello, Sign In';
  theme_icon: Icons = Icons.MOON;
  default_theme: 'dark' | 'light' = 'dark';
  category_icon: Icons = Icons.HAMBURGER;
  category_text: string = 'Category';
  category_display: MenuBarDisplay = MenuBarDisplay.ICON_TEXT;
  category_layout: ComponentLayout = ComponentLayout.VERTICAL;
  //items:(AWCMenuGroup | AWCMenuItem);

  @ViewChild('showCategoryAnchor', { read: ElementRef })
  public showCategoryAnchor!: ElementRef;
  @ViewChild('showCategoryMenu')
  public showCategoryMenu!: MenuComponent;

  position: PopoutDirection = PopoutDirection.BOTTOM;



  constructor(private router: Router){}

  public toogleTheme() {
    this.default_theme == 'dark'
      ? ((this.default_theme = 'light'), (this.theme_icon = Icons.SUN))
      : ((this.default_theme = 'dark'), (this.theme_icon = Icons.MOON));

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(this.default_theme);
  }

  public showCategory():void {
    this.showCategoryMenu.anchor = this.showCategoryAnchor.nativeElement;
    this.showCategoryMenu.open();
  }

  items= [{
      id:"item1",
      text:"Mobile Phones",
      icons:{
        leading: Icons.PHONE,
      },
      execute: () =>{
        this.router.navigate(['/phones/descrip']);
      },
      
    },
    {
      id:"item2",
      text:"Books",
      icons:{
        leading: Icons.LIST,
      },
      execute: () =>{
        this.router.navigate(['/books/lists']);
      },
    }
  
  ]
  

}
