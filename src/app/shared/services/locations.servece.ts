import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location, Locations } from '../models/location.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private http: HttpClient) {
  }

  getLocations(url?: string): Observable<Locations> {
    if (!url) {
      const initialUrl = [
        environment.baseUrl, 'location'
      ].join('')
      return this.http.get<Locations>(initialUrl) as Observable<Locations>
    } else {
      return this.http.get<Locations>(url) as Observable<Locations>
    }
  }

  getLocation(id: number): Observable<Location> {
    const url = [
      environment.baseUrl, 'location/', id
    ].join('')
    return this.http.get<Location>(url) as Observable<Location>
  }
}