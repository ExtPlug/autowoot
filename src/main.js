define(function (require, exports, module) {

  const Plugin = require('extplug/Plugin');

  const Autowoot = Plugin.extend({
    name: 'Autowoot',
    description: 'Woots every song automatically',

    init(id, ext) {
      this._super(id, ext);
      this.onAdvance = this.onAdvance.bind(this);
      this.woot = this.woot.bind(this);
    },

    enable() {
      this.wootElement = this.$('#woot');
      this.woot();
      API.on(API.ADVANCE, this.onAdvance);
    },

    disable() {
      API.off(API.ADVANCE, this.onAdvance);
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
        setTimeout(this.woot, 3000 + Math.floor(Math.random() * 5000));
      }
    }

  });

  module.exports = Autowoot;

});
