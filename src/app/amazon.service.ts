import { Injectable } from '@angular/core';
import { AWCListItem } from '@ansys/awc-angular/lists';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AmazonService {
  constructor(private http: HttpClient) {}

  getMobileBrands() {
    const mobileBrandsUrl = 'https://mobile-phones2.p.rapidapi.com/brands';
    let queryheaders = new HttpHeaders();
    queryheaders = queryheaders.append('X-RapidAPI-Key', environment.api_key);
    queryheaders = queryheaders.append(
      'X-RapidAPI-Host',
      'mobile-phones2.p.rapidapi.com'
    );

    return this.http.get<any>(mobileBrandsUrl, { headers: queryheaders }).pipe(
      map((itemData: any): any => {
        return {
          data: itemData.map((item: any): any => {
            return {
              id: item.id,
              text: item.name,
            };
          }),
        };
      })
    );
  }

  getMobileModels(brand: any) {
    const mobileModelsUrl = `https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-models-by-brandname/${brand}`;
    let queryheaders = new HttpHeaders();
    queryheaders = queryheaders.append('X-RapidAPI-Key', environment.api_key);
    queryheaders = queryheaders.append(
      'X-RapidAPI-Host',
      'mobile-phone-specs-database.p.rapidapi.com'
    );

    return this.http.get<any>(mobileModelsUrl, { headers: queryheaders }).pipe(
      map((itemData: any): any => {
        return {
          data: itemData.map((item: any): any => {
            return {
              id: item.modelValue,
              text: item.modelValue,
            };
          }),
        };
      })
    );
  }

  getMobileSpecifications(brand: any, model: any) {
    const mobileSpecificationsUrl = `https://mobile-phone-specs-database.p.rapidapi.com/gsm/get-specifications-by-brandname-modelname/${brand}/${model}`;
    let queryheaders = new HttpHeaders();
    queryheaders = queryheaders.append('X-RapidAPI-Key', environment.api_key);
    queryheaders = queryheaders.append(
      'X-RapidAPI-Host',
      'mobile-phone-specs-database.p.rapidapi.com'
    );

    return this.http
      .get<any>(mobileSpecificationsUrl, { headers: queryheaders })
      .pipe(
        map((itemData: any): any => {
          return {
            id: itemData.phoneDetails.customId,
            brand: itemData.phoneDetails.brandValue,
            model: itemData.phoneDetails.modelValue,
            launchStatus: itemData.gsmLaunchDetails.launchStatus,
            display: itemData.gsmDisplayDetails.displaySize,
            memory: itemData.gsmMemoryDetails.memoryInternal,
          };
        })
      );
  }

  getBestSellersListName() {
    const bestSellersListNameUrl =
      'https://api.nytimes.com/svc/books/v3/lists/names.json';
    let queryParams = new HttpParams();
    queryParams = queryParams.append('api-key', environment.books_api_key);

    return this.http
      .get<any>(bestSellersListNameUrl, { params: queryParams })
      .pipe(
        map((itemData: any): any => {
          return {
            data: itemData.results.map((item: any):any => {
              return {
                id: item.list_name,
                text: item.list_name,
              };
            } ),
          };
        })
      );
  }
}
