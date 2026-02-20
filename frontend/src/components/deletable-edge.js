import {
    BaseEdge,
    EdgeLabelRenderer,
    getSmoothStepPath,
    useReactFlow,
} from "reactflow";
import { CloseIcon } from "../icons";
import { useState } from "react";

export const DeletableEdge = (props) => {
    const {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        style,
        markerEnd,
    } = props;

    const { setEdges } = useReactFlow();
    const [isHover, setIsHover] = useState(false);

    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const onDelete = () => {
        setEdges((eds) => eds.filter((e) => e.id !== id));
    };

    return (
        <>
            <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />

            <EdgeLabelRenderer>
                <div
                    style={{
                        position: "absolute",
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: "all",
                        cursor: "pointer",
                        background: "#fff",
                    }}
                    onClick={onDelete}
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <CloseIcon size={20} color={isHover ? "red" : "black"} />
                </div>
            </EdgeLabelRenderer>
        </>
    );
};
