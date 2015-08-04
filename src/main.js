define(function (require, exports, module) {

  const Plugin = require('extplug/Plugin');
  const $ = require('jquery');

  const Autowoot = Plugin.extend({
    name: 'Autowoot',
    description: 'Woots every song automatically',

    enable() {
      this.wootElement = $('#woot');
      this.woot();
      this.listenTo(API, API.ADVANCE, this.onAdvance);
    },

    allowed() {
      let rules = this.ext.roomSettings.get('rules');
      return !rules || (rules.allowAutowoot !== false && rules.allowAutowoot != 'false');
    },

    woot() {
      if (this.allowed()) {
        this.wootElement.click();
      }
    },

    onAdvance() {
      if (this.allowed()) {
        setTimeout(() => {
          this.woot();
        }, 3000 + Math.floor(Math.random() * 5000));
      }
    }

  });

  module.exports = Autowoot;

});
