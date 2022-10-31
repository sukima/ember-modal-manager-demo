import Component from '@glimmer/component';
import { action } from '@ember/object';

import type ModalManager from '../../../utils/modal-manager';

interface Signature {
  Args: {
    manager: ModalManager;
  };
}

export default class ModalsFormExample extends Component<Signature> {
  @action
  confirmFormData(event: SubmitEvent) {
    let form = event.target as HTMLFormElement;
    let formattedFormData = JSON.stringify(
      Object.fromEntries(new FormData(form))
    );
    this.args.manager.confirm(formattedFormData);
  }
}
