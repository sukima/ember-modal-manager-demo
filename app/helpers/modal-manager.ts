import ModalManager from '../utils/modal-manager';
import { action } from '@ember/object';
import { helper } from '@ember/component/helper';

interface ValuedCallback {
  (value: any): void; // eslint-disable-line no-unused-vars
}

interface Callbacks {
  onCancelled?: () => void;
  onConfirmed?: ValuedCallback;
  onRejected?: ValuedCallback;
}

export interface Args {
  Positional: [];
  Named: Callbacks;
}

export class TemplateModalManager extends ModalManager {
  #onCancelled: () => void = () => {};
  #onConfirmed: ValuedCallback = () => {};
  #onRejected: ValuedCallback = () => {};

  constructor(callbacks: Callbacks) {
    super();
    this.#onCancelled = callbacks.onCancelled ?? this.#onCancelled;
    this.#onConfirmed = callbacks.onConfirmed ?? this.#onConfirmed;
    this.#onRejected = callbacks.onRejected ?? this.#onRejected;
  }

  @action
  async open() {
    let result = await super.open();
    if (result.reason === 'cancelled') this.#onCancelled();
    if (result.reason === 'confirmed') this.#onConfirmed(result.value);
    if (result.reason === 'rejected') this.#onRejected(result.value);
    return result;
  }
}

export default helper((_: Args['Positional'], callbacks: Args['Named']) => {
  return new TemplateModalManager(callbacks);
});
