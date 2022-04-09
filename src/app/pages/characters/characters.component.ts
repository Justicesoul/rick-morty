import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Characters } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/characters.servece';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersComponent implements OnInit {
  characters$?: Observable<Characters>
  characterSearch = '';
  errorMsg = ''

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit(): void {
    this.getCharacters('')
  }

  getCharacters(page: string): void {
    this.characters$ = this.charactersService.getCharacters(page)
  }

  filterCharacters(query: string) {
    this.errorMsg = ''
    this.characters$ = this.charactersService.filterCharacters(query).pipe(
      catchError(({ error }) => {
        this.errorMsg = error.error;
        this.characterSearch = '';
        return of({} as Characters);
      })
    );
  }

}

