import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { remote } from 'electron';

let {BrowserWindow} = remote;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }

  public newWindow() {
    let newW = new BrowserWindow({width: 1200, height: 600});
    newW.loadURL('https://www.google.com.hk');
    newW.on('close', () => {newW = null});
    newW.show();
  }
}
