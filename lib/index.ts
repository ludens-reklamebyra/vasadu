import * as objectPath from 'object-path';

interface Localize {
  [key: string]: string | Localize;
}

export default class Vasadu {
  private tree: Localize;
  private locale: string;

  constructor(tree: Localize, locale: string) {
    this.tree = tree;
    this.locale = locale;

    if (typeof tree !== 'object' || Array.isArray(this.tree)) {
      throw new Error(`The localization tree must be a plain object.`);
    }
  }

  /**
   * Si - the method you use when wanting to access a
   * translated value inside a localization tree.
   * @param path String
   * @returns String
   */
  si(path: string): string {
    const values = objectPath.get(this.tree, path);
    const emptyTranslation = 'Missing translation';

    if (!values) {
      throw new Error(`The path "${path}" does not exist.`);
    }

    if (!(this.locale in values)) {
      console.warn(`Missing translation for path: '${path}'`);
      return emptyTranslation;
    }

    return values[this.locale];
  }
}
