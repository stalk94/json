import { useCallback, useState } from "react";
import type { AddFieldProps } from './types';


export default function AddField({ 
    depth, 
    step, 
    color, 
    onAdd, 
    onCancel 
}: AddFieldProps) {
    const [newKey, setNewKey] = useState("");
    const [newType, setNewType] = useState("string");

    const handle = useCallback(() => {
        if (!newKey) return;
        onAdd(newKey, newType);
        setNewKey("");
    }, [newKey, newType]);
    

    return (
        <div 
            className="flex gap-1"
            style={{ marginLeft: depth * step }}
        >
            <input
                placeholder="key"
                value={newKey}
                className="rounded-sm pl-4 w-40"
                onChange={(e) => setNewKey(e.target.value)}
                style={{
                    border: `1px solid ${color}`,
                    background: "transparent",
                    color
                }}
            />

            <select
                className="border-1 rounded-lg border-dashed"
                //style={{borderColor: color, }}
                value={newType}
                onChange={(e) => setNewType(e.target.value)}
            >
                <option className="bg-[#373737] text-amber-50" value="string">string</option>
                <option className="bg-[#373737] text-amber-50" value="number">number</option>
                <option className="bg-[#373737] text-amber-50" value="boolean">boolean</option>
                <option className="bg-[#373737] text-amber-50" value="null">null</option>
                <option className="bg-[#373737] text-amber-50" value="object">object</option>
                <option className="bg-[#373737] text-amber-50" value="array">array</option>
            </select>

            <button
                className="border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed ml-2"
                onClick={handle}
            >
                ✔
            </button>

            <button 
                className="border-1 rounded-lg px-2 hover:opacity-50 cursor-pointer border-dashed"
                onClick={onCancel}
            >
                ✖
            </button>
        </div>
    );
}