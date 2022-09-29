import { confineTabbing, releaseTabbing } from './tabbing';

export default abstract class DialogController {
  constructor(protected element: HTMLDialogElement) {
    this.element = element;
  }
  abstract open(): void;
  abstract close(): void;

  static for(element: HTMLDialogElement) {
    return Reflect.has(element, 'showModal')
      ? new ModernDialogController(element)
      : new LegacyDialogController(element);
  }
}

class ModernDialogController extends DialogController {
  open() {
    this.element.showModal();
  }
  close() {
    this.element.close();
  }
}

class LegacyDialogController extends DialogController {
  #handleEscape = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return;
    event.preventDefault();
    this.element.dispatchEvent(new CustomEvent('cancel', { bubbles: true }));
  };
  open() {
    this.element.show();
    this.element.classList.add('legacy-dialog');
    this.element.addEventListener('keyup', this.#handleEscape);
    confineTabbing(this.element);
  }
  close() {
    this.element.close();
    this.element.classList.remove('legacy-dialog');
    this.element.removeEventListener('keyup', this.#handleEscape);
    releaseTabbing();
  }
}
