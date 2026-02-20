import { useMemo, useCallback, useEffect } from "react";
import { Position, useUpdateNodeInternals } from "reactflow";
import { useStore } from "../store";

export const useTextNodeVariables = ({ id, data, setValue }) => {
    const setEdges = useStore((s) => s.setEdges);
    const updateNodeField = useStore((s) => s.updateNodeField);
    const onConnect = useStore((s) => s.onConnect);
    const edges = useStore((s) => s.edges);
    const updateNodeInternals = useUpdateNodeInternals();

    //  Re-sync handles when variables change
    useEffect(() => {
        updateNodeInternals(id);
    }, [updateNodeInternals, id, data?.variables]);

    //  Dynamic handles
    const variableHandles = useMemo(() => {
        return (data?.variables || []).map((variable) => ({
            type: "target",
            position: Position.Left,
            id: `${id}-${variable}`,
        }));
    }, [data?.variables, id]);

    //  Remove on delete
    const onInputChange = useCallback(
        (_, newValue) => {
            setValue(newValue);

            const matches = [...newValue.matchAll(/{{(.*?)}}/g)];
            const currentVars = matches.map((m) => m[1]);
            const existingVars = data?.variables || [];

            if (currentVars.length < existingVars.length) {
                const removed = existingVars.filter(
                    (v) => !currentVars.includes(v)
                );

                if (removed.length > 0) {
                    updateNodeField(id, "variables", currentVars);
                    setEdges(
                        edges.filter(
                            (e) =>
                                !(
                                    e.target === id &&
                                    removed.includes(
                                        e.targetHandle?.replace(`${id}-`, "")
                                    )
                                )
                        )
                    );
                }
            }
        },
        [setValue, data?.variables, updateNodeField, id, setEdges, edges]
    );

    // Add node on select
    const onAddNode = useCallback(
        (selectedId) => {
            const existing = data?.variables || [];

            if (existing.includes(selectedId)) return;

            updateNodeField(id, "variables", [...existing, selectedId]);

            onConnect({
                source: selectedId,
                target: id,
                targetHandle: `${id}-${selectedId}`,
            });
        },
        [data?.variables, updateNodeField, onConnect, id]
    );

    return {
        variableHandles,
        onInputChange,
        onAddNode,
    };
};
