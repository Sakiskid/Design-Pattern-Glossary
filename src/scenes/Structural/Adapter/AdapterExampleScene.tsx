import {Circle, Icon, Txt, TxtProps, Node, Grid, Rect, Layout, makeScene2D} from '@motion-canvas/2d';
import {all, chain, createRef, waitUntil} from '@motion-canvas/core';
import Colors from "../../../util/colors";

export default makeScene2D(function* (view) {
    // Create your animations here

    // Background
    view.fill(Colors.bg)

    const iconDB = createRef<Grid>();

    view.add(
        <>
                <Rect ref={iconDB} fill={"blue"} grow={1}>
                    <Txt position={[0, -500]} fontSize={150}>Local Database</Txt>
                    <Icon icon={'eos-icons:database'} size={820} color={Colors.secondary}/>
                </Rect>
        </>
    )

    const iconP1 = createRef<Icon>();
    const iconP2 = createRef<Icon>();
    const iconP3 = createRef<Icon>();
    view.add(<Icon icon={'f7:sportscourt'} ref={iconP1} size={354} color={Colors.secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={iconP2} size={354} color={Colors.secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={iconP3} size={354} color={Colors.secondary} opacity={1}/>)

    iconP1().position([1200, -700]);
    iconP2().position([1200, 0]);
    iconP3().position([1200, 700]);

    yield* chain(
        iconDB().opacity(0, 0),
        iconDB().opacity(1, 1),
        iconDB().position.x(-1000, 1)
    )

    yield* waitUntil('pause 1');

    // Move players into the database
    yield* all(
        iconP1().position(iconDB().position, 2),
        iconP2().position(iconDB().position, 2),
        iconP3().position(iconDB().position, 2),
    )
});