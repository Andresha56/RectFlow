import { useStore } from "../store";
import { useState, useRef, useCallback, useEffect } from "react";
import { useOutsideClick } from "../hooks/use-outside-click";
import { useUpdateNodeInternals } from "reactflow";

export const useBaseNodeController = (id) => {
    const deleteNode = useStore((state) => state.deleteNode);
    const nodes = useStore((s) => s.nodes);
    const updateNodeField = useStore((state) => state.updateNodeField);

    const btnRef = useRef(null);
    const [confirm, setConfirm] = useState(false);
    const [tooltipPos, setTooltipPos] = useState(null);
    const [error, setError] = useState(null);

    const wrapperRef = useOutsideClick(() => setConfirm(false));

    const updateNodeInternals = useUpdateNodeInternals();

    useEffect(() => {
        updateNodeInternals(id);
    }, [id, updateNodeInternals]);

    const handleDelete = useCallback(() => {
        if (confirm) {
            deleteNode(id);
            setConfirm(false);
            return;
        }

        if (btnRef.current) {
            const rect = btnRef.current.getBoundingClientRect();
            setTooltipPos({
                top: rect.bottom + 6,
                left: rect.left,
            });
        }

        setConfirm(true);
    }, [confirm, deleteNode, id]);

    const handleCustomNameChange = useCallback(
        (val) => {
            setError(null);

            if (!val) {
                setError("Name can't be empty");
                return;
            }

            const isDuplicate = nodes.some(
                (node) => node.id !== id && node.data?.customName === val
            );

            if (isDuplicate) {
                setError("Name must be Unique");
                return;
            }

            updateNodeField(id, "customName", val);
        },
        [nodes, id, updateNodeField]
    );

    return {
        btnRef,
        wrapperRef,
        confirm,
        tooltipPos,
        error,
        handleDelete,
        handleCustomNameChange,
    };
};
