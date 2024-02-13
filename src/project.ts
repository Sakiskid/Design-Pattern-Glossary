import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';

import {Client as AdapterClient} from './scenes/Structural/Adapter/AdapterExample';
import Example from './Example';

let currentExample : Example;

// Set the current example
try {
  currentExample = new AdapterClient();
  currentExample.run();
}
catch (e) {
  console.error(e);
}


export default makeProject({
  scenes: [example],
});
