import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';

interface Args {
  Positional: [any];
}

export class TrackedState {
  @tracked value: any;

  set = (value: any) => (this.value = value);
  toggle = () => this.set(!this.value);

  get is() {
    return { [`${this.value}`]: true };
  }

  constructor(initialValue: any) {
    this.value = initialValue;
  }
}

export default helper(([value]: Args['Positional']) => new TrackedState(value));
