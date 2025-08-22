import React, { useState } from "react";

interface AddFieldProps {
    depth: number;
    step: number;
    color: string;
    onAdd: (key: string, type: string) => void;
    onCancel: () => void;
}


export const AddField: React.FC<AddFieldProps> = ({ depth, step, color, onAdd, onCancel }) => {
    const [newKey, setNewKey] = useState("");
    const [newType, setNewType] = useState("string");

    
    return (
        <div style={{ marginLeft: depth * step, display: "flex", gap: 4 }}>
            <input
                placeholder="key"
                value={newKey}
                onChange={(e) => setNewKey(e.target.value)}
                style={{
                    border: `1px solid ${color}`,
                    background: "transparent",
                    color,
                }}
            />
            <select
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
            >
                <option value="string">string</option>
                <option value="number">number</option>
                <option value="boolean">boolean</option>
                <option value="null">null</option>
                <option value="object">object</option>
                <option value="array">array</option>
            </select>
            <button
                onClick={() => {
                    if (!newKey) return;
                    onAdd(newKey, newType);
                    setNewKey("");
                }}
            >
                ✔
            </button>
            <button 
                onClick={onCancel}
            >
                ✖
            </button>
        </div>
    );
}