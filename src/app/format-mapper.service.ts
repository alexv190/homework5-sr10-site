import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './common/user';
import { Geo, UserResponse } from './common/userResponse';

@Injectable({
  providedIn: 'root',
})
export class FormatMapperService {
  mapUserResponseToUser(event: HttpEvent<any>): any {
    if (event instanceof HttpResponse) {
      const usersResponse:UserResponse=event.body;
      if (usersResponse instanceof Array) {
        const body = new Array<User>();
        for (const userResponseVal of usersResponse) {
          const userResponse = userResponseVal as UserResponse;
          const user = new User();
          user.name = `${userResponse.name} (${userResponse.username})`
          user.email = userResponse.email;
          user.address = `${userResponse.address.zipcode} ${userResponse.address.city} ${userResponse.address.street} ${userResponse.address.suite}`;
          user.geo = userResponse.address.geo;
          user.geoLink = this.getGeoLink(user.geo);
          body.push(user);
        }
        return event.clone({ body });
      }
     
      
    }
    return event;
  }
  getGeoLink(geo:Geo): string {
    return `http://www.google.com/maps/place/${geo.lat},${geo.lng}`;
  }

  constructor() {}
}
