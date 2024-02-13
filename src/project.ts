import {makeProject} from '@motion-canvas/core';
import Example from './Example';

// Load Scenes
import AdapterExampleScene from "./scenes/Structural/Adapter/AdapterExampleScene?scene";
import example from './scenes/example?scene';

// Load Examples
import {Client as AdapterClient} from './scenes/Structural/Adapter/AdapterExample';

// Set the current example
let currentExample : Example;
try {
  currentExample = new AdapterClient();
  currentExample.run();
}
catch (e) {
  console.error(e);
}


export default makeProject({
  scenes: [AdapterExampleScene],
});
