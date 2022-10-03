interface SelectorAllFn {
  (selector: string): NodeList;
}

const tabIndexes = new WeakMap<HTMLElement, number>();
const defaultSelectorAll = (selector: string) =>
  document.querySelectorAll(selector);

function* findTabableElements(selectAll: SelectorAllFn = defaultSelectorAll) {
  yield* selectAll('a[href]');
  yield* selectAll('area[href]');
  yield* selectAll('input:not([disabled])');
  yield* selectAll('select:not([disabled])');
  yield* selectAll('textarea:not([disabled])');
  yield* selectAll('button:not([disabled])');
  yield* selectAll('iframe');
  yield* selectAll('object');
  yield* selectAll('embed');
  yield* selectAll('*[tabindex]');
  yield* selectAll('*[contenteditable]');
}

export function confineTabbing(
  container: HTMLElement,
  selectAll?: SelectorAllFn
) {
  let firstElementWithin = null;
  let tabableElements = new Set(findTabableElements(selectAll));
  for (let element of tabableElements) {
    if (!(element instanceof HTMLElement)) continue;
    tabIndexes.set(element, element.tabIndex);
    if (container.contains(element)) {
      firstElementWithin ??= element;
    } else {
      (<HTMLElement>element).tabIndex = -1;
    }
  }
  return firstElementWithin;
}

export function releaseTabbing(selectAll?: SelectorAllFn) {
  let tabableElements = new Set(findTabableElements(selectAll));
  for (let element of tabableElements) {
    if (!(element instanceof HTMLElement)) continue;
    element.tabIndex = tabIndexes.get(element) || 0;
  }
}
