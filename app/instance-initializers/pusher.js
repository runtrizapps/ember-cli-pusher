import Ember from 'ember';
import ENV from '../config/environment';

const {
  RSVP: { Promise }
} = Ember;

export function initialize(instance) {
  let promise = ENV['APP']['PUSHER_OPTS'];

  Ember.assert('Pusher library is required', typeof window.Pusher !== 'undefined');

  if (!(promise instanceof Promise)) {
    promise = new Promise((resolve) => {
      Ember.assert('Define PUSHER_OPTS in your config', typeof promise !== 'undefined');
      resolve(promise);
    });
  }

  promise.then(function(options) {
    const pusher = new window.Pusher(options.key, options.connection);
    const pusherController = instance.container.lookup('pusher:main');
    pusherController.didCreatePusher(pusher);
  });
}

export default {
  name: 'pusher',
  initialize: initialize
};
