export default class Jsx {
  static FRAGMENT = ""

  static createElement(tagName, attrs = {}, ...children) {
    if (tagName == Jsx.FRAGMENT) {
      const fragment = document.createDocumentFragment();
      children.forEach(child => {
        fragment.appendChild(child);
      });
      return fragment;
    }

    const elem = Object.assign(document.createElement(tagName), attrs)
    for (const child of children) {
      if (Array.isArray(child)) elem.append(...child)
      else elem.append(child)
    }
    return elem;
  }
}

