import Ember from 'ember';
import Resolver from 'ember-resolver';

import preactComponent from 'ember-react/components/react-component';

const { get } = Ember;

export default Resolver.extend({
  resolveComponent(parsedName) {
    console.log("resolve preact component");
    const result = this.resolveOther(parsedName);

    if (!result) {
      return result;
    }

    if (get(result, 'isComponentFactory')) {
      return result;
    } else {
      return preactComponent.extend({
        reactComponent: result
      });
    }
  },

  resolveReactComponent(parsedName) {
    parsedName.type = 'component';
    const result = this.resolveOther(parsedName);
    parsedName.type = 'preact-component';
    return result;
  }
});
