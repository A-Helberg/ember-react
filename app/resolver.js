import Ember from 'ember';
import Resolver from 'ember-resolver';

// import preactComponent from 'ember-react/components/react-component';

const { get } = Ember;

export default Resolver.extend({
  resolveReactComponent(parsedName) {
    debugger
    parsedName.type = 'component';
    const result = this.resolveOther(parsedName);
    parsedName.type = 'preact-component';
    return result;
  }
});
