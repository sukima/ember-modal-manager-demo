import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

import type ModalManager from '../../utils/modal-manager';
import type ModalPortalMediator from '../../services/modal-portal-mediator';

export interface Sig {
  Args: {
    manager: ModalManager;
  };
  Yields: [ModalManager];
}

export default class Modal extends Component<Sig['Args']> {
  @service declare modalPortalMediator: ModalPortalMediator;

  @action
  onOutsideClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.args.manager.cancel();
    }
  }
}
