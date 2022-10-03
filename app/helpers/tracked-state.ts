import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

interface Args {
  Positional: [unknown];
}

export class TrackedState {
  @tracked value: unknown;

  set = (value: unknown) => (this.value = value);
  toggle = () => this.set(!this.value);

  get is() {
    return { [`${this.value}`]: true };
  }

  constructor(initialValue: unknown) {
    this.value = initialValue;
  }
}

export default helper(([value]: Args['Positional']) => new TrackedState(value));
