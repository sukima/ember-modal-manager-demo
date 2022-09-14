import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export interface Result {
  reason: 'confirmed' | 'cancelled';
  value?: any;
}

export default class ModalManager {
  @tracked isOpen = false;
  #resolve: (result: Result) => void = () => {};

  @action
  open() {
    return new Promise<Result>((resolve) => {
      this.#resolve = resolve;
      this.isOpen = true;
    }).finally(() => (this.isOpen = false));
  }

  @action
  confirm(value: any) {
    this.#resolve({ reason: 'confirmed', value });
  }

  @action
  cancel() {
    this.#resolve({ reason: 'cancelled' });
  }
}
