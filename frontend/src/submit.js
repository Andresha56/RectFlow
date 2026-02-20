import { useCallback, useState } from "react";
import { useStore } from "./store";
import { CustomAlert } from "./components/custom-alert";

export const SubmitButton = ({ className }) => {
    const [pipeLineData, setPipelineData] = useState(null);
    const [isError, setIsError] = useState(false);

    const edges = useStore((s) => s.edges);
    const nodes = useStore((s) => s.nodes);

    const onSubmit = useCallback(async () => {
        const customNodes = nodes.map(({ id }) => ({ id }));
        const customEdges = edges.map(({ source, target }) => ({
            source,
            target,
        }));

        try {
            setIsError(false);
            const response = await fetch(
                "http://localhost:8000/pipelines/parse",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        nodes: customNodes,
                        edges: customEdges,
                    }),
                }
            );

            const data = await response.json();
            setPipelineData(data);
        } catch {
            setIsError(true);
            setPipelineData(null);
        }
    }, [nodes, edges]);

    return (
        <>
            <button type="submit" className={className} onClick={onSubmit}>
                Submit
            </button>

            {(pipeLineData || isError) && (
                <CustomAlert
                    data={isError ? null : pipeLineData}
                    message={
                        isError ? "Something went wrong" : "Pipeline Summary"
                    }
                    onClose={() => {
                        setPipelineData(null);
                        setIsError(false);
                    }}
                />
            )}
        </>
    );
};
