import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';

import Adapter from './scenes/Structural/Adapter/Adapter';
import Example from './Example';

let currentExample : Example;

// Set the current example
currentExample = new Adapter();
currentExample.run();


export default makeProject({
  scenes: [example],
});
