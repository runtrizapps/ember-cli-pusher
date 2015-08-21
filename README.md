#  Ember Pusher

IMPORTANT! This project is deprecated. Please use the original [ember-pusher](https://github.com/jamiebikies/ember-pusher) that is an Ember CLI addon now.

---

This is an npm package that contains the Ember Pusher library
packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli) addon.

## Installation

**Ember Pusher requires at least Ember CLI 0.0.44.**

To install simply run from your project's root:

```
ember install:addon ember-cli-pusher
```

If you're using Ember CLI 0.1.4 or older, run:

```
npm install --save-dev ember-cli-pusher
ember generate ember-cli-pusher
```

### Import example

```js
import { Controller } from 'ember-pusher/controller';
import { Bindings } from 'ember-pusher/bindings';
import { ClientEvents } from 'ember-pusher/client_events';
```

### Configuration

Ember Pusher uses the Ember CLI project's configuration as defined in
`config/environment.js`:

```js
APP: {
  PUSHER_OPTS: {
    key: 'foo',
    connection: {},
    logAllEvents: false
  }
}
```

For the actual Ember Pusher repository and documentation see
https://github.com/jamiebikies/ember-pusher
