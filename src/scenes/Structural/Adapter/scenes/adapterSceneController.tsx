import {Grid, Icon, makeScene2D, Circle} from '@motion-canvas/2d';
import {all, chain, createRef, Direction, BBox, slideTransition, waitUntil, zoomInTransition} from '@motion-canvas/core';
import Colors from "../../../../util/colors";
import adapterScene1 from "./adapterScene1";

export default makeScene2D(function* (view) {

    view.fill('red')
    view.add(
        <>
            <Circle size={2400} fill={'green'}>

            </Circle>
        </>
    )

    // Create your animations here
    yield* slideTransition(Direction.Left);

    // Background

    const iconDB = createRef<Grid>();
    yield* waitUntil('yeee');

});