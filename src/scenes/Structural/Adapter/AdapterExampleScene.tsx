import {Circle, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Create your animations here

    const circle = createRef<Circle>();

    view.add(<Circle ref={circle} size={320} fill={'lightseagreen'} />);

    yield* all(
        circle().scale(2, 2).to(1, 2),
        circle().skew(10, 1).to(1, 2),
    )
    yield*    circle().fill("#ffffff", 2).to("#e13238", 1);
});