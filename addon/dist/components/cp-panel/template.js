import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{! template-lint-disable no-action }}\n{{yield (hash\n  toggle=(component \'cp-panel-toggle\' on-click=(action \'toggleIsOpen\') isOpen=this.isOpen)\n  body=(component \'cp-panel-body\' shouldAnimate=this.shouldAnimate isOpen=this.isOpen)\n  name=this.name\n  isOpen=this.isOpen\n)}}\n");

var layout = setComponentTemplate(TEMPLATE, templateOnly());

export { layout as default };
//# sourceMappingURL=template.js.map
