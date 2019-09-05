import Vasadu from '../lib/index';

const tree = {
  buttonText: {
    publish: {
      no: 'Publiser',
      en: 'Publish'
    }
  },
  branding: {
    no: 'Mitt varemerke',
    en: 'My brand!'
  }
};

describe('vasadu', () => {
  it('should translate to norwegian with no locale', () => {
    const localizer = new Vasadu(tree, 'no');
    expect(localizer.si('buttonText.publish')).toEqual('Publiser');
  });

  it('should translate to english with en locale', () => {
    const localizer = new Vasadu(tree, 'en');
    expect(localizer.si('buttonText.publish')).toEqual('Publish');
  });

  it('should return a message that indicates empty locale when locale is not defined', () => {
    const localizer = new Vasadu(tree, '');
    expect(localizer.si('buttonText.publish')).toEqual('Missing translation');
  });

  it('should throw if localization tree is not a plain object', () => {
    expect(() => {
      // @ts-ignore
      new Vasadu('hey', '');
    }).toThrow();

    expect(() => {
      // @ts-ignore
      new Vasadu([{ no: 'hey', en: 'test' }], '');
    }).toThrow();
  });

  it('should throw if object key does not exists', () => {
    expect(() => {
      new Vasadu(
        {
          name: {
            no: 'Navn',
            en: 'Name'
          }
        },
        'no'
      ).si('test.test');
    }).toThrow(`The path "test.test" does not exist.`);
  });
});
