import { useEffect, useRef } from "react";

export const useOutsideClick = (callback) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref.current) return;

            if (!ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener("pointerdown", handleClickOutside, true);

        return () => {
            document.removeEventListener(
                "pointerdown",
                handleClickOutside,
                true
            );
        };
    }, [callback]);

    return ref;
};
