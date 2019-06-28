# Vasadu

Makes your localization life a breeze!

## Install

```sh
yarn add @ludens-reklame/vasadu
```

## Usage

```ts
import Vasadu from '@ludens-reklame/vasadu';

// Define your translation tree
const myLocalizationTheme = {
  buttonText: {
    publish: {
      en: 'Publish',
      no: 'Publiser'
    }
  },
  intro: {
    en: 'Welcome to our site',
    no: 'Velkommen til vår side'
  }
};

// Initialize Vasadu class, and giving it our theme and wanted locale.
const localization = new Vasadu(myLocalizationTheme, 'no');

// Now we can access deep nested values with completed translations:

localization.si('buttonText.publish'); // Publiser
```

## Contribute

If you want to contribute in any way, feel free to create issues, or send pull requests!

# vasadu
