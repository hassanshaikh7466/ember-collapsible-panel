import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{#if @shouldAnimate}}\n\n  {{#this.liquidif @isOpen use=\'crossFade\'}}\n    <div class=\"cp-Panel-body-inner\">\n      {{yield}}\n    </div>\n  {{/this.liquidif}}\n\n{{else}}\n\n  {{#if @isOpen}}\n    <div class=\"cp-Panel-body-inner\">\n      {{yield}}\n    </div>\n  {{/if}}\n\n{{/if}}\n");

var layout = setComponentTemplate(TEMPLATE, templateOnly());

export { layout as default };
//# sourceMappingURL=template.js.map
