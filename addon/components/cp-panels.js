import Ember from 'ember';

export default Ember.Component.extend({

  _cpPanels: true,

  classNames: 'cp-Panels',

  panels: Ember.A(),

  openPanels: Ember.A(),

  registerPanel(instance) {
    this.get('panels').pushObject(instance);
  },

  unregisterPanel(instance) {
    this.get('panels').removeObject(instance);
  },

  togglePanel(panel) {
    // panel.toggleBody();
    var openPanels = this.get('openPanels');

    if (openPanels.contains(panel)) {
      openPanels.removeObject(panel);
    } else {
      openPanels.pushObject(panel);
    }
    // this.set('openPanel', openPanel === panel ? null : panel);
  }

  // updateStuff: Ember.observer('panels.@each.isOpen', function() {
  //   debugger;
  //   if (this.get('accordion')) {
  //     if (this.get('alreadyOpen')) {
  //       this.get('alreadyOpen')
  //         .forEach(function(panel) {panel.set('isOpen', false);});
  //     }

  //     var alreadyOpen = this.get('panels').filter( p => p.get('isOpen') );

  //     this.set('alreadyOpen', alreadyOpen);
  //   }
  // })

});
