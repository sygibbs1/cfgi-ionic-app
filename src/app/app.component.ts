import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { APIService } from './API.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})



export class AppComponent {
  todos: Array<any>;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private lottieSplashScreen : LottieSplashScreen,
    private apiService: APIService,
  ) {this.initializeApp()}

  initializeApp() {
    this.lottieSplashScreen.show()
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.apiService.ListTodos().then((evt) => {
        this.todos = evt.items;
      });
      this.apiService.OnCreateTodoListener.subscribe((evt) => {
        const data = (evt as any).value.data.onCreateTodo;
        this.todos = [...this.todos, data];
      });

      setTimeout(() => {
        this.lottieSplashScreen.hide();
      }, 1330)
  });
}}