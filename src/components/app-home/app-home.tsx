import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding>
        <p>If you get lost, the <a target="_blank" rel="noopener" href="https://stenciljs.com/docs/introduction">docs</a> will be your guide.</p>
      </ion-content>
    ];
  }
}
