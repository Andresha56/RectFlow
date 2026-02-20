import { useCallback } from "react";
import { LabelInfo } from "./label-Info.js";
import "../styles/text-box.scss";
export const Textbox = ({
    onChange,
    placeholder,
    label,
    type = "text",
    required,
    value,
    id,
    className,
}) => {
    const handleTextChange = useCallback(
        (e) => {
            const inputValue = e.target.value;
            onChange?.(inputValue);
        },
        [onChange]
    );

    return (
        <div className={`input-wrapper ${className}`}>
            {label ? (
                <LabelInfo label={label} required={required} htmlFor={id} />
            ) : null}
            <input
                type={type}
                tabIndex={0}
                onChange={handleTextChange}
                placeholder={placeholder}
                onWheel={(e) => {
                    if (type === "number") {
                        e.currentTarget.blur();
                    }
                }}
                value={value ?? ""}
                id={id}
            />
        </div>
    );
};
