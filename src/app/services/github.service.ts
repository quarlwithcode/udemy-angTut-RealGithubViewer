import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'b9349458b2d672680967';
    private client_secret = '1dee5ba053fbc542096e4166b157a2abbc585199';

    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'quarlwithcode';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username: string){
        this.username = username;
    }
}