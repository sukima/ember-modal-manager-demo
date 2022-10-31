import ModalManager from '../utils/modal-manager';
import { action } from '@ember/object';
import { helper } from '@ember/component/helper';

import type { Result, ValuedResult } from '../utils/modal-manager';

interface ValuedCallback {
  (value: ValuedResult<unknown>['value']): void;
}

interface Callbacks {
  onDone?: (result: Result<unknown>) => void;
  onCancelled?: () => void;
  onConfirmed?: ValuedCallback;
  onRejected?: ValuedCallback;
}

export interface Args {
  Positional: [];
  Named: Callbacks;
}

function noop() {
  return;
}

export class TemplateModalManager extends ModalManager {
  #onDone: (result: Result<unknown>) => void = noop;
  #onCancelled: () => void = noop;
  #onConfirmed: ValuedCallback = noop;
  #onRejected: ValuedCallback = noop;

  constructor(callbacks: Callbacks) {
    super();
    this.#onDone = callbacks.onDone ?? this.#onDone;
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
    this.#onDone(result);
    return result;
  }
}

export default helper((_: Args['Positional'], callbacks: Args['Named']) => {
  return new TemplateModalManager(callbacks);
});
