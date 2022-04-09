import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Character } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/characters.servece';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit, OnDestroy {
  routeSubscription?: Subscription
  character$?: Observable<Character>

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const id = Number(paramMap.get('id'))
      this.character$ = this.charactersService.getCharacter(id)
    })

  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }

}
