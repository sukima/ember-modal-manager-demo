import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

interface CancelledResult {
  reason: 'cancelled';
}

interface ValuedResult<T> {
  reason: 'confirmed' | 'rejected';
  value: T;
}

function noop() {
  return;
}

export type Result<T> = CancelledResult | ValuedResult<T>;

export default class ModalManager<T = unknown> {
  @tracked isOpen = false;

  #resolve: (result: Result<T>) => void = noop;
  #reject: (error: Error) => void = noop;

  @action
  open() {
    return new Promise<Result<T>>((resolve, reject) => {
      this.#resolve = resolve;
      this.#reject = reject;
      this.isOpen = true;
    }).finally(() => (this.isOpen = false));
  }

  @action
  cancel() {
    this.#resolve({ reason: 'cancelled' });
  }

  @action
  confirm(value: T) {
    this.#resolve({ reason: 'confirmed', value });
  }

  @action
  reject(value: T) {
    this.#resolve({ reason: 'rejected', value });
  }

  @action
  error(error: Error) {
    this.#reject(error);
  }
}
