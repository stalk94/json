import { useState } from "react";
import { MdOutlineBuild } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

type Props = {
    onChangeType: (type: string) => void;
    current: string;
}


const TYPES = ["string", "number", "boolean", "null", "object", "array"];


export default function TypeSwitcher({ onChangeType, current, className }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div 
            className={`items-center my-auto mr-2 ${className}`}
            style={{position: "relative", display: "inline-block"}}
        >
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setOpen(!open);
                }}
                style={{
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                    color: "#93adcf9e",
                }}
            >
                <IoSettingsSharp size={12} />
            </button>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        background: "#2a2a2a",
                        border: "1px solid #555",
                        borderRadius: 4,
                        zIndex: 10,
                    }}
                >
                    {TYPES.map((t) => (
                        <div
                            key={t}
                            onClick={() => {
                                onChangeType(t);
                                setOpen(false);
                            }}
                            style={{
                                padding: "2px 6px",
                                fontSize: "0.8em",
                                cursor: "pointer",
                                background: current === t ? "#444" : "transparent",
                                color: "#eee",
                            }}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}