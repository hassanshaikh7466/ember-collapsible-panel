import templateOnly from '@ember/component/template-only';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';

var TEMPLATE = precompileTemplate("{{yield (hash\n  panel=(component \'cp-panel\' group=this)\n  name=@name\n)}}\n");

var layout = setComponentTemplate(TEMPLATE, templateOnly());

export { layout as default };
//# sourceMappingURL=template.js.map
