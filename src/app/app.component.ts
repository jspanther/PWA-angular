import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jokes';
  joke:any = {};
  constructor(private update: SwUpdate, private data: DataService){
    update.available.subscribe(e =>{
      update.activateUpdate().then(()=> { document.location.reload(); })
    })
  }

  ngOnInit(){
    this.data.fetchJokes().subscribe(res =>{
      this.joke = res;
    });
  }
}
