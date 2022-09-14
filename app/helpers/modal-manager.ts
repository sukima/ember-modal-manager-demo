import ModalManager from '../utils/modal-manager';
import { action } from '@ember/object';
import { helper } from '@ember/component/helper';

interface Callbacks {
  onCancelled?: () => void;
  onConfirmed?: (value: any) => void;
}

export interface Args {
  Positional: [];
  Named: Callbacks;
}

export class TemplateModalManager extends ModalManager {
  #onCancelled: () => void = () => {};
  #onConfirmed: (value: any) => void = () => {};

  constructor(callbacks: Callbacks) {
    super();
    this.#onCancelled = callbacks.onCancelled ?? this.#onCancelled;
    this.#onConfirmed = callbacks.onConfirmed ?? this.#onConfirmed;
  }

  @action
  async open() {
    let result = await super.open();
    if (result.reason === 'cancelled') this.#onCancelled();
    if (result.reason === 'confirmed') this.#onConfirmed(result.value);
    return result;
  }
}

export default helper((_: Args['Positional'], callbacks: Args['Named']) => {
  return new TemplateModalManager(callbacks);
});
