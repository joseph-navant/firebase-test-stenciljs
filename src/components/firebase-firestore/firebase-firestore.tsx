import { Component } from '@stencil/core';
import '@firebase/firestore';

@Component({
  tag: 'firebase-firestore',
  styleUrl: 'firebase-firestore.css'
})
export class FirebaseFirestore {
  render() {
    return (
      <div>
        <p>Hello FirebaseFirestore!</p>
      </div>
    );
  }
}