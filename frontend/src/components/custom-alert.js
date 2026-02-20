import { CloseIcon } from "../icons";
import "../styles/custom-alert.scss";

export const CustomAlert = ({ data, onClose, message }) => {
    const num_nodes = data?.num_nodes;
    const num_edges = data?.num_edges;
    const is_dag = data?.is_dag;
    return (
        <div className="custom-alert-overlay">
            <div className="custom-alert">
                <div className="custom-alert__header">
                    <span>{message}</span>

                    <button onClick={onClose}>
                        <CloseIcon
                            size={24}
                            color={is_dag ? "#027a48" : "#b42318"}
                        />
                    </button>
                </div>

                {data && (
                    <div className="custom-alert__body">
                        <p>No. of Nodes - {num_nodes}</p>
                        <p>No. of Edges - {num_edges}</p>
                        <p>Is DAG - {is_dag ? "True" : "False"}</p>
                    </div>
                )}
            </div>
        </div>
    );
};
