import { Component } from '@stencil/core';
import '@firebase/storage';

@Component({
  tag: 'firebase-storage',
  styleUrl: 'firebase-storage.css'
})
export class FirebaseStorage {
  render() {
    return (
      <div>
        <p>Hello FirebaseStorage!</p>
      </div>
    );
  }
}