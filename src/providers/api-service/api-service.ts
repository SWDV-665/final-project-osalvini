import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  uploadImage(imageData: string, itemId: string) {
    const url = `https://yourapi.com/upload/${itemId}`;
    const body = {
      image: imageData
    };
    return this.http.post(url, body);
  }
}

