

export default function ToogleBoolean({
    onChange,
    setEditingId,
    value,
    fontSize,
    border
}) {
    return (
        <span className="mx-6" style={{ display: "inline-flex", gap: 4 }}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onChange(true);
                    setEditingId(null);
                }}
                style={{
                    cursor: "pointer",
                    border: `1px dashed ${border}`,
                    borderRadius: 4,
                    padding: "0 4px",
                    fontSize: fontSize,
                    background: value === true ? "#a5f07a60" : "transparent",
                    color: "#82f061",
                    opacity: value === false ? 0.6 : 1,
                }}
            >
                ✔
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onChange(false);
                    setEditingId(null);
                }}
                style={{
                    cursor: "pointer",
                    border: `1px dashed ${border}`,
                    borderRadius: 4,
                    padding: "0 4px",
                    fontSize: fontSize,
                    background: value === false ? "#ed785e36" : "transparent",
                    color: "red",
                    opacity: value === true ? 0.6 : 1,
                }}
            >
                ✖
            </button>
        </span>
    );
}