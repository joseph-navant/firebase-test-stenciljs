import { TestWindow } from '@stencil/core/testing';
import { FirebaseFirestore } from './firebase-firestore';

describe('firebase-firestore', () => {
  it('should build', () => {
    expect(new FirebaseFirestore()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFirebaseFirestoreElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FirebaseFirestore],
        html: '<firebase-firestore></firebase-firestore>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
