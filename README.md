Autowoot
========

ExtPlug plugin that woots every song automatically.

## Installation

If you do not have ExtPlug yet, get it [here](https://extplug.github.io).

You can install this plugin by going to your ExtPlug settings menu, pressing
"Install Plugin", and entering this Plugin URL:

```
https://extplug.github.io/autowoot/build/autowoot.js;extplug/autowoot/main
```

## Room Settings

**Note: This section is intended for room hosts only.**

If you want to prevent users from autowooting in your room, set
"rules.allowAutowoot" to `false` in your room settings:

```json
{
  "rules": {
    "allowAutowoot": false
  }
}
```

The default value for "rules.allowAutowoot" is `true`.

## Building

**Note: this section is intended for developers only.**

This plugin uses NPM for dependency management and `gulp` for building.

```
npm install
gulp build
```

The built plugin will be stored at `build/autowoot.js`.

## License

[MIT](./LICENSE)
