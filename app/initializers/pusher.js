import { Controller } from 'ember-pusher/controller';

export function initialize(container, app) {
  app.register('pusher:main', Controller);
  app.inject('controller', 'pusher', 'pusher:main');
  app.inject('route', 'pusher', 'pusher:main');
}

export default {
  name: 'pusher',
  initialize: initialize
};
