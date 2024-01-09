import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import layout from './template.js';

/* eslint-disable ember/no-classic-classes, ember/no-classic-components, ember/require-tagless-components, prettier/prettier */
var component = Component.extend({
  layout,
  classNames: 'cp-Panels',
  accordion: false,
  animate: true,
  _cpPanels: true,
  name: oneWay('elementId')
});

export { component as default };
//# sourceMappingURL=component.js.map
