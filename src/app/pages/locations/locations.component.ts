import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from 'src/app/shared/models/location.model';
import { LocationsService } from 'src/app/shared/services/locations.servece';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationsComponent implements OnInit {
  locations$?: Observable<Locations>
  locationSearch = ''

  constructor(private locationsService: LocationsService) {
  }

  ngOnInit(): void {
    this.getLocations('')
  }

  getLocations(page: string): void {
    this.locations$ = this.locationsService.getLocations(page)
  }

}

