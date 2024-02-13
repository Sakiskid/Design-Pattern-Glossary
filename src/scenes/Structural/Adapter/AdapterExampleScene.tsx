import {Circle, Icon, Txt, TxtProps, Node, Grid, Rect, Layout, makeScene2D} from '@motion-canvas/2d';
import {all, chain, createRef, waitUntil} from '@motion-canvas/core';

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
        <Layout layout width={'100%'} height={'100%'} >
            <Rect grow={1} fill={'#242424'} radius={4} />
            <Layout direction={"column"}>
                <Rect ref={grid} fill={"red"} grow={1}>
                    <Txt position={[0, -500]} fontSize={150}>Local Database</Txt>
                    <Icon icon={'eos-icons:database'} size={820} color={secondary}/>
                </Rect>
            </Layout>
            <Rect grow={1} fill={'green'} radius={4} />
            {/*<Layout gap={10} direction="column" grow={3}>*/}
            {/*    <Rect*/}
            {/*        grow={8}*/}
            {/*        fill={"red"}*/}
            {/*        radius={4}*/}
            {/*        stroke={'#fff'}*/}
            {/*        lineWidth={4}*/}
            {/*        margin={2}*/}
            {/*    />*/}
        </Layout>
    )

    const player1 = createRef<Icon>();
    const player2 = createRef<Icon>();
    const player3 = createRef<Icon>();
    view.add(<Icon icon={'f7:sportscourt'} ref={player1} size={354} color={secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={player2} size={354} color={secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={player3} size={354} color={secondary} opacity={1}/>)

    yield* chain(
        grid().opacity(0, 0),
        grid().opacity(1, 1),
        grid().position.x(-1000, 1)
    )

    yield* waitUntil('pause 1');

    yield* chain(
        // player1().position([1200, -700], -1),
        // player2().position([1200, -0], -1),
        // player3().position([1200, 700], -1),
    )
    // yield*    circle().fill("#ffffff", 2).to("#e13238", 1);
});