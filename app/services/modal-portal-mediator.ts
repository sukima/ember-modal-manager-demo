import Service from '@ember/service';

export default class ModalPortalMediator extends Service {
  #portalTarget: Element | undefined;

  get portalTarget() {
    return this.#portalTarget;
  }

  registerPortal(element: Element) {
    this.#portalTarget = element;
  }

  unregisterPortal() {
    this.#portalTarget = undefined;
  }
}
