

define('extplug/autowoot/main',['require','exports','module','extplug/Plugin','jquery'],function (require, exports, module) {

  var Plugin = require('extplug/Plugin');
  var $ = require('jquery');

  var Autowoot = Plugin.extend({
    name: 'Autowoot',
    description: 'Woots every song automatically',

    enable: function enable() {
      this.wootElement = $('#woot');
      this.woot();
      this.listenTo(API, API.ADVANCE, this.onAdvance);
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
      var _this = this;

      if (this.allowed()) {
        setTimeout(function () {
          _this.woot();
        }, 3000 + Math.floor(Math.random() * 5000));
      }
    }

  });

  module.exports = Autowoot;
});
