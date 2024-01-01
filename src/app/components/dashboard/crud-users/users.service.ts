import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Response } from 'src/app/interface/Response.interface';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'https://randomuser.me/api/';
  constructor(private http: HttpClient) {}

  //Fetch User:
  getUsers(size: number = 10): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/?results=${size}`)
      .pipe(
        map((response: any) => this.getResponse(response))
      );
  }

  //Fetch One User UUID:
  getDetailsUsers(uuid: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?uuid=${uuid}`)
    .pipe(
      map((response: any) => this.getResponse(response))
    );
  }

  //get Response:
  private getResponse(response: Response) {
    return {
      info: { ...response.info },
      results: response.results.map((user: any) => ({
        uuid: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        userName: user.login.username,
        gender: user.login.gender,
        address: `${user.location.street.number} ${user.location.street.name} ${user.location.city}`,
        dateOfBirth: user.dob.date, // Corrected typo here
        phone: user.phone,
        imageUrl: user.picture.medium,
        coordinate: {
          latitude: +user.location.coordinates.latitude,
          longitude: +user.location.coordinates.longitude,
        },
      })),
    };
  }
  
}
