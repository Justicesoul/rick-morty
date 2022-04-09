import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Location } from 'src/app/shared/models/location.model';
import { LocationsService } from 'src/app/shared/services/locations.servece';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  routeSubscription?: Subscription
  location$?: Observable<Location>

  constructor(private route: ActivatedRoute, private locationsService: LocationsService) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.paramMap.subscribe(paramMap => {
      const id = Number(paramMap.get('param'))
      this.location$ = this.locationsService.getLocation(id)
    })

  }
  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe()
  }

}