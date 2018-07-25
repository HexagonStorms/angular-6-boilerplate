import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router, public http: HttpClient) {
    this.router = router;
  }

  goToResult() {
    console.log('it works')
    this.router.navigate(['/result']);
  }
}
