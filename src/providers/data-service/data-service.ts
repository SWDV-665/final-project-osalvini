import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

interface CategoryEndpoint {
  endpoint: string;
  name: string;
  subTitle: string;
  community: boolean;
}

interface EmailMessage {
  email: string;
  message: string;
}

@Injectable()
export class DataService {
  private dataChangeSubject: Subject<boolean>;
  public dataChanged$: Observable<boolean>;
  private baseURL: string = 'http://fishableapp.com';
  public categoryEndpoints: CategoryEndpoint[] = [
    { community: false, endpoint: `${this.baseURL}/api/catch`, name: 'catch', subTitle: "My Catches" },
    { community: false, endpoint: `${this.baseURL}/api/location`, name: 'location', subTitle: "Favorite Fishing Spots" },
    { community: false, endpoint: `${this.baseURL}/api/bait`, name: 'bait', subTitle: "Bait History" },
    { community: false, endpoint: `${this.baseURL}/api/lure`, name: 'lure', subTitle: "My Lures" },
    { community: false, endpoint: `${this.baseURL}/api/email`, name: 'email', subTitle: "Email" },
    { community: true, endpoint: `${this.baseURL}/api/feed/catch`, name: 'feed_catch', subTitle: "Community Catches" },
    { community: true, endpoint: `${this.baseURL}/api/feed/location`, name: 'feed_location', subTitle: "Community Fishing Spots" },
    { community: true, endpoint: `${this.baseURL}/api/feed/bait`, name: 'feed_bait', subTitle: "Community Bait" },
    { community: true, endpoint: `${this.baseURL}/api/feed/lure`, name: 'feed_lure', subTitle: "Community Lures" },
  ];

  constructor(private http: HttpClient) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  fetchCategoryData(): Observable<{ name: string, items: any[] }[]> {
    const requests = this.categoryEndpoints.map(category => {
      if (!category.community) {
        return this.http.get<any[]>(`${this.baseURL}/${category.endpoint}`, { headers: this.getHeaders() }).pipe(
          map(items => ({ name: category.subTitle, items })),
          catchError(this.handleError)
        )
      }
    });
    return forkJoin(requests);
  }

  fetchCommunityData(): Observable<{ name: string, items: any[] }[]> {
    const requests = this.categoryEndpoints.map(category => {
      if (category.community) {
        return this.http.get<any[]>(`${this.baseURL}/${category.endpoint}`, { headers: this.getHeaders() }).pipe(
          map(items => ({ name: category.subTitle, items })),
          catchError(this.handleError)
        )
      }
    });
    return forkJoin(requests);
  }

  getItems(subTitle: string): Observable<{ subTitle: string, items: any[] }> {
    const url = this.getEndPoint(subTitle);
    return this.http.get<any[]>(url, { headers: this.getHeaders() }).pipe(
      map(items => ({
        subTitle, items: items.map((i) => {
          if (i.image.length === 0) {
            i.image = '/assets/imgs/logo.png';
          }
          return i;
        })
      })),
      catchError(this.handleError)
    );
  }

  addItem(subTitle: string, item: any): Observable<{ subTitle: string, items: any[] }> {
    const url = this.getEndPoint(subTitle);
    return this.http.post<any>(url, item, { headers: this.getHeaders() }).pipe(
      map(response => {
        this.dataChangeSubject.next(true);
        return { subTitle: subTitle, items: response };
      }),
      catchError(this.handleError)
    );
  }


  removeItem(endpoint: string, id: string): Observable<void> {
    const url = this.getEndPoint(endpoint) + `/${id}`;
    return this.http.delete<void>(url, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError)
    );
  }

  editItem(subTitle: string, item: any): Observable<{ subTitle: string, items: any[] }> {
    // get item id
    const category = this.categoryEndpoints.find(c => subTitle === c.subTitle);
    const tablename = category.name;
    const pks = {
      'location': 'location_id',
      'catch': 'catch_id',
      'lure': 'lure_id',
      'bait': 'bait_id'
    };
    const pk = pks[tablename];
    let id = item[pk];

    const url = this.getEndPoint(subTitle) + `/${id}`;
    return this.http.put<any>(url, item, { headers: this.getHeaders() }).pipe(
      map(response => {
        this.dataChangeSubject.next(true);
        return { subTitle, items: response };
      }),
      catchError(this.handleError)
    );
  }

  sendEmail(email: EmailMessage): Observable<any> {
    const url = this.getEndPoint('Email');
    return this.http.post(url, email, { headers: this.getHeaders() }).pipe(
      catchError(this.handleError),
      map(response => response)
    );
  }

  private getEndPoint(subTitle: string): string {
    const category = this.categoryEndpoints.find(ce => ce.subTitle === subTitle);
    return category ? category.endpoint : `Wrong SubTitle (${subTitle}) Provided for Endpoint.`;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('DataService Error:', error.message);
    return Observable.throw(() => new Error(`Error: ${error.message}`));
  }

}
