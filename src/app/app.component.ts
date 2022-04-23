import { Component, OnInit } from '@angular/core';
import { BackendServerService } from './backend-server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
  title = 'mean-test-angular';

  constructor(private server: BackendServerService) {}

  ngOnInit(): void {
    
    this.getData();
  }

  getData = () => {
    
    this.server.getDataFromServer().subscribe(response => {
      console.log('response from server', response);
    }, (error) => {
      console.log('Internal Server Error', error);
    })
  }

}
