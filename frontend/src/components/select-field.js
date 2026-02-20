import { LabelInfo } from "./label-Info";
import { useCallback } from "react";
import "../styles/select-field.scss";

export const SelectField = ({ id, value, onChange, options = [], label }) => {
    const onSelectChange = useCallback(
        (e) => {
            const inputValue = e.target.value;
            onChange?.(inputValue);
        },
        [onChange]
    );

    return (
        <div className="select-wrapper">
            {label && <LabelInfo htmlFor={id} label={label} />}
            <select id={id} value={value} onChange={onSelectChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
