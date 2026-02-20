import { Handle } from "reactflow";
import "../styles/node.scss";
import { NodeIconMap } from "../icons/iconMap";
import { CloseIcon } from "../icons";
import { Tooltip } from "../components/tooltip";
import { Textbox } from "../components/text-box";
import { useBaseNodeController } from "../hooks/use-base-node-controller";
export const BaseNode = ({
    id,
    data,
    title,
    children,
    handles = [],
    type,
    headerMessage,
}) => {
    const Icon = NodeIconMap[type];

    const {
        btnRef,
        wrapperRef,
        confirm,
        tooltipPos,
        error,
        handleDelete,
        handleCustomNameChange,
    } = useBaseNodeController(id);

    return (
        <div className="node">
            <div className="node-header">
                <div className="node-header-top">
                    <div>
                        <Icon size={"18"} />
                        <p>{title}</p>
                    </div>

                    <div ref={wrapperRef}>
                        <button
                            ref={btnRef}
                            className="close-btn"
                            onClick={handleDelete}
                        >
                            <CloseIcon
                                size={"18"}
                                color={confirm ? "red" : "black"}
                            />
                        </button>

                        {confirm && (
                            <Tooltip
                                position={tooltipPos}
                                message={"Confirm delete"}
                            />
                        )}
                    </div>
                </div>

                {headerMessage && (
                    <p className="node-header-description">{headerMessage}</p>
                )}
            </div>

            <div className="node-children">
                <Textbox
                    className="node-custom-name"
                    value={data?.customName}
                    onChange={handleCustomNameChange}
                />

                {error && <p className="node-error-message">{error}</p>}

                {children}
            </div>

            {handles.map((handle) => (
                <Handle
                    key={handle.id}
                    type={handle.type}
                    position={handle.position}
                    id={handle.id}
                />
            ))}
        </div>
    );
};
