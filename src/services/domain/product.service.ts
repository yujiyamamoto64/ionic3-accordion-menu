import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ProductService {

    constructor(public http: HttpClient) {
    }

    findByCategory(category_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/products/?categories=${category_id}`);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}