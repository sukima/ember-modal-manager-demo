import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

import type ModalManager from '../../utils/modal-manager';
import type ModalPortalMediator from '../../services/modal-portal-mediator';

export interface Sig {
  Args: {
    manager: ModalManager;
  };
  Yields: [ModalManager];
}

export default class Modal extends Component<Sig> {
  @service declare modalPortalMediator: ModalPortalMediator;
}
