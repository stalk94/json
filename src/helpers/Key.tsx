import type { KeyEditableProps } from './types';


export default function KeyEditable({ 
    label, 
    onRename, 
    editable, 
    style, 
    className,
    color
}: KeyEditableProps) {

    return (
        <span 
            className={`flex ${className}`}
            style={style}
        >
            <span
                contentEditable={editable && !label.startsWith("[")}
                suppressContentEditableWarning
                onBlur={(e) => {
                    const newKey = e.currentTarget.textContent?.trim();
                    if (editable && onRename && newKey && newKey !== label) {
                        onRename(label, newKey);
                    }
                    else e.currentTarget.textContent = label;
                }}
                style={{
                    display: "inline-block",
                    outline: "none",
                    minWidth: "1ch"
                }}
            >
                { label }
            </span>
            <span style={{ color: color }}>:</span>
        </span>
    );
}