import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Hero}           from './hero';
import {Observable}     from 'rxjs/Observable'

@Injectable()
export class HeroRealService {
    constructor (private http: Http) {}

    private _heroesUrl = 'api/heroes';  // URL to web api

    getHeroes () {
        //noinspection TypeScriptUnresolvedFunction
        return this.http.get(this._heroesUrl)
            .toPromise()
            .then(res => <Hero[]> res.json().data, this.handleError)
            .then(data => { console.log(data); return data; }); // eyeball results in the console
    }
    addHero (name: string) : Promise<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        //noinspection TypeScriptUnresolvedFunction
        return this.http.post(this._heroesUrl, body, options)
            .toPromise()
            .then(res => <Hero> res.json().data)
            .catch(this.handleError);
    }
    private handleError (error: any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Promise.reject(error.message || error.json().error || 'Server error');
    }
}
