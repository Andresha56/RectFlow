import "../styles/label-info.scss";
export const LabelInfo = ({ label, required, labelClassName, htmlFor }) => {
    if (!label) {
        return null;
    }
    return (
        <label className={labelClassName} htmlFor={htmlFor}>
            {label}
            {required && <span className="required">*</span>}
        </label>
    );
};
