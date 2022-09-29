import DialogController from '../utils/dialog-controller';
import { assert } from '@ember/debug';
import { modifier } from 'ember-modifier';

export default modifier((element: Element) => {
  assert(
    'show-dialog can only be applied on a <dialog> element',
    element instanceof HTMLDialogElement
  );

  let controller = DialogController.for(element);
  controller.open();
  return () => controller.close();
});
