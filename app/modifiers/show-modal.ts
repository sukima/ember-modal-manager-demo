import { assert } from '@ember/debug';
import { modifier } from 'ember-modifier';

export default modifier((element: Element) => {
  assert(
    'show-dialog can only be applied on a <dialog> element',
    element instanceof HTMLDialogElement
  );

  element.showModal();
  return () => element.close();
});
