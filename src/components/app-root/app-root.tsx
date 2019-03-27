import { Component } from '@stencil/core';
import { firebaseConfig } from '../../helpers/config';
import firebase from '@firebase/app';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  componentWillLoad() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/firestore" component="firebase-firestore" />
          <ion-route url="/storage" component="firebase-storage" />
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
