import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'number8-angular';
  products:Product[] = []

  constructor(private ps: ProductsService, private dialog:MatDialog){

  }

  ngOnInit(){
    this.products = this.ps.getProducts();
  }

  details(product: Product) {
    this.dialog.open(DialogDataExampleDialog, {
      data: product
    })

  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'details.component.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private sb:MatSnackBar) {}

  addToCart(){
    this.sb.open('Product added successfully!', '', {
      duration: 2000
    });
  }
}

