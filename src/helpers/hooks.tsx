import { useState } from "react";


export function useHover() {
    const [hover, setHover] = useState(false);
    
    return {
        hover,
        bind: {
            onMouseEnter: () => setHover(true),
            onMouseLeave: () => setHover(false),
        },
    };
}