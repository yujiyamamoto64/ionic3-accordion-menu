import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategorieService } from '../../services/domain/categorie.service';
import { CategorieDTO } from '../../models/categorie.dto';
import { API_CONFIG } from '../../config/api.config';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategorieDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public categorieService : CategorieService) {
  }

  ionViewDidLoad() {
    this.categorieService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }

  showProducts(category_id : string) {
    this.navCtrl.push('ProductsPage', {category_id: category_id});
  }
}
