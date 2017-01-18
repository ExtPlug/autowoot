/* global API */
import Plugin from 'extplug/Plugin';
import $ from 'jquery';

const Autowoot = Plugin.extend({
  name: 'Autowoot',
  description: 'Woots every song automatically',

  enable() {
    this.wootElement = $('#woot');
    this.woot();
    this.listenTo(API, API.ADVANCE, this.onAdvance);
  },

  allowed() {
    const rules = this.ext.roomSettings.get('rules');
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
  },
});

export default Autowoot;
