import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { modifier } from 'ember-modifier';

import type ModalPortalMediator from '../../../services/modal-portal-mediator';

export default class ModalPortalTarget extends Component {
  @service declare modalPortalMediator: ModalPortalMediator;

  registerPortal = modifier((element: Element) => {
    this.modalPortalMediator.registerPortal(element);
    return () => this.modalPortalMediator.unregisterPortal();
  });
}
