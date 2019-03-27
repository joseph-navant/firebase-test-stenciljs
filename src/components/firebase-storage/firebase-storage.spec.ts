import { TestWindow } from '@stencil/core/testing';
import { FirebaseStorage } from './firebase-storage';

describe('firebase-storage', () => {
  it('should build', () => {
    expect(new FirebaseStorage()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFirebaseStorageElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FirebaseStorage],
        html: '<firebase-storage></firebase-storage>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
