import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
    url = 'http://localhost:3000/locations';

    constructor(private http: HttpClient) {}

    getAllHousingLocations(): Observable<HousingLocationInfo[]> {
        return this.http.get<HousingLocationInfo[]>(this.url);
    }

    getHousingLocationById(id: number): Observable<HousingLocationInfo | undefined> {
        return this.http.get<HousingLocationInfo>(
            `${this.url}/${id}`
        );
    }

    submitApplication(
        firstName: string,
        lastName: string,
        email: string
    ) {
        // tslint:disable-next-line
        console.log(
            `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
        );
    }
}
