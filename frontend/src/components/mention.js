import { MentionsInput, Mention } from "react-mentions";
import { useMemo } from "react";
import { useStore } from "../store";

export const NodeMentionInput = ({
    nodeId,
    value,
    onChange,
    onAdd,
    placeholder = "Type {{ to insert node",
    trigger = "{{",
}) => {
    const nodes = useStore((state) => state.nodes);

    const items = useMemo(
        () =>
            nodes
                .filter((node) => node.id !== nodeId)
                .map((node) => ({
                    id: node.id,
                    display:
                        node.data?.customName || "customName is not present..",
                })),
        [nodes, nodeId]
    );

    return (
        <div className="nodrag nowheel">
            <MentionsInput
                className="mention-input"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            >
                <Mention
                    trigger={trigger}
                    data={items}
                    markup="{{__id__}}"
                    displayTransform={(id) => id}
                    appendSpaceOnAdd
                    onAdd={onAdd}
                />
            </MentionsInput>
        </div>
    );
};
