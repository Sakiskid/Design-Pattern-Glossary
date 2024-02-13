

import {Grid, Icon, makeScene2D, Rect, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, Direction, slideTransition, waitFor, waitUntil} from '@motion-canvas/core';
import {CodeBlock, word} from "@motion-canvas/2d/lib/components/CodeBlock";
import Colors from "../../../../util/colors";

export default makeScene2D(function* (view) {
    // Create your animations here

    // Background
    view.fill(Colors.bg)

    const refIconDB = createRef<Grid>();

    view.add(
        <>
            <Rect ref={refIconDB} paddingBottom={950}>
                <Txt position={[0, -500]} fontSize={150}>Local Database</Txt>
                <Icon icon={'eos-icons:database'} size={820} color={Colors.secondary}/>
            </Rect>
        </>
    )

    const iconP1 = createRef<Icon>();
    const iconP2 = createRef<Icon>();
    const iconP3 = createRef<Icon>();
    const refPlayerCode = createRef<CodeBlock>();

    view.add(<Icon icon={'f7:sportscourt'} ref={iconP1} size={354} color={Colors.secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={iconP2} size={354} color={Colors.secondary} opacity={1}/>)
    view.add(<Icon icon={'f7:sportscourt'} ref={iconP3} size={354} color={Colors.secondary} opacity={1}/>)

    iconP1().position([1200, -700]);
    iconP2().position([1200, 0]);
    iconP3().position([1200, 700]);

    yield* chain(
        refIconDB().opacity(0, 0),
        refIconDB().opacity(1, 1),
        refIconDB().position.x(-1000, 1)
    )

    yield* waitUntil('pause 1');

    // Move players into the database
    yield* all(
        iconP1().position(refIconDB().position, 2),
        iconP2().position(refIconDB().position, 2),
        iconP3().position(refIconDB().position, 2),
    )

    yield* all(
        iconP1().opacity(0, 0.2),
        iconP2().opacity(0, 0.2),
        iconP3().opacity(0, 0.2),
    )

    // Move db up
    yield* chain(
        refIconDB().position.y((refIconDB().position().y - 300), 1),
    )

    yield view.add(
        <CodeBlock top={refIconDB().bottom} opacity={0} ref={refPlayerCode} fontSize={100} code={`
            let player = {
                name: string,
                age: number,
                team: string
            }
            `}/>
    )

    yield* all(
        refPlayerCode().opacity(1, 1)
    )

    yield* waitUntil('code 1 pause')

    // ADD OFFICIAL PLAYER API NODE
    const refIconAPI = createRef<Rect>();
    const refPlayerCodeAPI = createRef<CodeBlock>();
    view.add(
        // @ts-expect-error
        <Rect ref={refIconAPI} opacity={0} paddingBottom={950} position={[1000, refIconDB().position.y]}>
            <Txt position={[0, -500]} fontSize={150}>Official Player API</Txt>
            <Txt position={[0, -300]} fontSize={100}>(Service)</Txt>
            <Icon icon={'carbon:api-1'} size={820} color={Colors.secondary}/>
        </Rect>
    )

    // Official Player API Codeblock
    yield view.add(
        <CodeBlock top={refIconAPI().bottom} opacity={0} ref={refPlayerCodeAPI} fontSize={100} code={`
            let player = {
                firstName: string,
                lastName: string,
                ageSquared: number,
                team: string
            }
            `}/>
    )

    // select code to show differences
    yield* chain(
        refIconAPI().opacity(1, 1),
        refPlayerCodeAPI().opacity(1, 0.2),

        waitFor(2),
    )

    yield* all(
        // Deselect localdb player code
        refPlayerCode().selection(word(0, 0, 0), 1.5),

        refPlayerCodeAPI().selection([
            ...word(1, 1, 12)
        ], 1.5),
    )

    yield* chain(
        refPlayerCodeAPI().selection([
            ...word(1, 1, 12),
            ...word(2, 1, 12)
        ], 1),

        // You have to rewrite each line to not lose the selection
        refPlayerCodeAPI().selection([
            ...word(1, 1, 12),
            ...word(2, 1, 11),
            ...word(3, 1, 13),
        ], 1),
    )

    yield* waitUntil(`code 2 pause`)

    
    // Start explaining
})