import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pluck } from 'rxjs';
import { Character, Characters } from '../models/character.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {
  }

  getCharacters(url?: string): Observable<Characters> {
    if (!url) {
      const initialUrl = [
        environment.baseUrl, 'character'
      ].join('')
      return this.http.get<Characters>(initialUrl) as Observable<Characters>
    } else {
      return this.http.get<Characters>(url) as Observable<Characters>
    }
  }

  filterCharacters(query: string): Observable<Characters> {
    const url = [
      environment.baseUrl, `character/?name=${query}`
    ].join('')
    return this.http.get<Characters>(url) as Observable<Characters>
  }

  getCharacter(id: number): Observable<Character> {
    const url = [
      environment.baseUrl, 'character/', id
    ].join('')
    return this.http.get<Character>(url) as Observable<Character>
  }
}