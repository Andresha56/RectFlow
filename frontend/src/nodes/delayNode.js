import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "./baseNode";
import { Textbox } from "../components/text-box.js";
import { NODE_TYPES_ENUM } from "../constants/node-types.js";
import { NODE_DESCRIPTIONS } from "../constants/node-type-description.js";
export const DelayNode = ({ id, data }) => {
    const [seconds, setSeconds] = useState("1");

    return (
        <BaseNode
            id={id}
            data={data}
            title="Delay"
            type={NODE_TYPES_ENUM.DELAY}
            headerMessage={NODE_DESCRIPTIONS[NODE_TYPES_ENUM.DELAY]}
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                {
                    type: "source",
                    position: Position.Right,
                    id: `${id}-output`,
                },
            ]}
        >
            <Textbox
                label="Seconds"
                value={seconds}
                onChange={setSeconds}
                id={`${id}-seconds`}
                className={"node-name"}
            />
        </BaseNode>
    );
};
