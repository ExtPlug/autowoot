

define('extplug/autowoot/main',['require','exports','module','extplug/Plugin'],function (require, exports, module) {

  var Plugin = require('extplug/Plugin');

  var Autowoot = Plugin.extend({
    name: 'Autowoot',
    description: 'Woots every song automatically',

    init: function init(id, ext) {
      this._super(id, ext);
      this.onAdvance = this.onAdvance.bind(this);
      this.woot = this.woot.bind(this);
    },

    enable: function enable() {
      this.wootElement = this.$('#woot');
      this.woot();
      API.on(API.ADVANCE, this.onAdvance);
    },

    disable: function disable() {
      API.off(API.ADVANCE, this.onAdvance);
    },

    allowed: function allowed() {
      var rules = this.ext.roomSettings.get('rules');
      return !rules || rules.allowAutowoot !== false && rules.allowAutowoot != 'false';
    },

    woot: function woot() {
      if (this.allowed()) {
        this.wootElement.click();
      }
    },

    onAdvance: function onAdvance() {
      if (this.allowed()) {
        setTimeout(this.woot, 3000 + Math.floor(Math.random() * 5000));
      }
    }

  });

  module.exports = Autowoot;
});
