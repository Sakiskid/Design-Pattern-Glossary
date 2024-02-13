import {makeProject} from '@motion-canvas/core';
import Example from './Example';

//////////////
// Load Examples
//////////////
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

//////////////
// Load Scenes
//////////////
import adapterScenes from "./scenes/Structural/Adapter/scenes/index";
import example from './scenes/example?scene';



export default makeProject({
  scenes: [...adapterScenes],
});
