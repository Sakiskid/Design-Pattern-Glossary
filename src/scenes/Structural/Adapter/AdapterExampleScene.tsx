import {Circle, Icon, Txt, TxtProps, Node, Grid, makeScene2D} from '@motion-canvas/2d';
import {all, createRef} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    // Create your animations here
    let bg = '#384046';
    let primary = '#C5C739';
    let secondary = '#3A8AC7';
    let warning = '#C73D3A';
    let dark = '#473938';
    let light = '#717247';

    // Background
    view.fill(bg)

    const circle = createRef<Circle>();
    const grid = createRef<Grid>();

    // view.add(<Icon icon={'f7:sportscourt'} size={320} color={primary}/>)
    view.add(
        <Grid ref={grid}>
            <Txt position={[0, -500]} fontSize={250}>Test</Txt>
            <Icon icon={'eos-icons:database'} size={820} color={secondary}/>
        </Grid>
    )

    yield* all(
        grid().position.x(-1000, 1)
        // view.fill(bg, 2) // animate it
        // ().scale(2, 2).to(1, 2),
        // circle().skew(10, 1).to(1, 2),
    )
    yield* all(

    )
    // yield*    circle().fill("#ffffff", 2).to("#e13238", 1);
});