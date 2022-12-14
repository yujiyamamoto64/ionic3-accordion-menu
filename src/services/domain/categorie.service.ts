import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { CategorieDTO } from "../../models/categorie.dto";

@Injectable()
export class CategorieService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategorieDTO[]> {
        return this.http.get<CategorieDTO[]>(`${API_CONFIG.baseUrl}/categories`)
    }
}