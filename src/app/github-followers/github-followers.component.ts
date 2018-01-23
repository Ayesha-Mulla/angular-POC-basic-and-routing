import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private service: GithubFollowersService, private route: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest(
      [
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .switchMap(combineParam => {
        const id = combineParam[0].get('id');
        const pageNumber = combineParam[1].get('page');
        console.log(id, name, pageNumber);
        return this.service.getAll();
      }
      )
      .subscribe(followers => this.followers = followers);
    this.service.getAll()
      .subscribe(followers => this.followers = followers);
  }
}
