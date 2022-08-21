import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorieService } from '../../services/domain/categorie.service';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categorieService : CategorieService) {
  }

  ionViewDidLoad() {
    this.categorieService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }
}
