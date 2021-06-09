import {LoadingService} from "./services/loading/loading.service";
import {UserService} from "./services/user/user.service";
import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {filter, switchMap, tap} from "rxjs/operators";

//TODO file directory POC
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userInput = new FormControl("");
  loading$ = this.loadingService.loading$;

  constructor(
    private userService: UserService,
    public loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.userInput.valueChanges
      .pipe(
        filter(value => !!value),
        switchMap(value => this.userService.getUsersByName(value))
      )
      .subscribe((users) => {
        console.log(users);
      })
  }
}
