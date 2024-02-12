import {makeProject} from '@motion-canvas/core';

import example from './scenes/example?scene';

import Client from './scenes/Structural/Adapter';

let client = new Client();
client.run();


export default makeProject({
  scenes: [example],
});
