import React, { useState, useMemo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown, MdCheckCircle } from "react-icons/md";
import { MdDeleteForever, MdAddCircleOutline } from "react-icons/md";
import { useJsonEditorContext } from "./provider";
import AddField from './helpers/AddField';
import type { EditorProps } from './types';
import defaultTheme from './theme';
import KeyEditable from './helpers/Key';
import ToogleBoolean from './helpers/Boolean';
import TypeSwitcher from './helpers/TypeSwitcher';
import { useHover } from './helpers/hooks';


export default function JsonEditor({
    value,
    onChange,
    label,
    theme = defaultTheme,
    path = "",
    depth = 0,
    expandedPaths,
    defaultCollapsed = false,
    onDelete,
    onRename, 
}: EditorProps) {
    const [adding, setAdding] = useState(false);
    const [collapsedState, setCollapsedState] = useState(defaultCollapsed);
    const { editingId, setEditingId, editable } = useJsonEditorContext();
    const step = theme.step ? theme.step : 8;

    const s = {
        fontSize: theme.fontSize ?? defaultTheme.fontSize,
        fontFamily: theme.fontFamily ?? defaultTheme.fontFamily,
        lineHeight: theme.lineHeight ?? defaultTheme.lineHeight,
    };
    const c = { ...defaultTheme.colors, ...theme.colors };
    const commonText: React.CSSProperties = {
        fontSize: s.fontSize,
        fontFamily: s.fontFamily,
        lineHeight: s.lineHeight,
    };
    const keyStyle: React.CSSProperties = {
        color: c.key,
        fontWeight: 300,
        fontStyle: "italic",
        ...commonText,
    };
    const indexStyle: React.CSSProperties = {
        color: c.index,
        fontWeight: 400,
        fontStyle: "normal",
        ...commonText,
    };

    const nodeId = useMemo(
        () => (path ? path + "/" + (label ?? "root") : label ?? "root"),
        [path, label]
    );
    const isExternallyExpanded = expandedPaths?.includes(nodeId) ?? false;
    const collapsed = expandedPaths ? !isExternallyExpanded : collapsedState;
    const toggleCollapse = () => {
        if (!expandedPaths) setCollapsedState(!collapsedState);
    };
    const renderControls = (onDelete?: () => void, onAdd?: () => void) => (
        <span style={{ display: "inline-flex", gap: 4, marginLeft: 8 }}>
            {(editable && onAdd) && (
                <button 
                    className="mr-1"
                    onClick={(e) => {
                        e.stopPropagation();
                        onAdd();
                    }}
                    style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        color: "#6c6c6c",
                    }}
                >
                    <MdAddCircleOutline size={16} />
                </button>
            )}
            {(editable && onDelete) && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        color: "tomato",
                    }}
                >
                    <MdDeleteForever size={16} />
                </button>
            )}
        </span>
    );
    const renderControlsObject = (onDelete?: () => void) => (
        <span style={{ display: "inline-flex", gap: 4, marginLeft: 8 }}>
            {(editable) && (
                <button
                    className="mr-1"
                    onClick={(e) => {
                        setAdding(true);
                    }}
                    style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        color: "#6c6c6c",
                    }}
                >
                    <MdAddCircleOutline size={16} />
                </button>
            )}
            {(editable && onDelete) && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete();
                    }}
                    style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: "none",
                        color: "tomato",
                    }}
                >
                    <MdDeleteForever size={16} />
                </button>
            )}
        </span>
    );


    // === Boolean ===
    if (typeof value === "boolean") {
        const isEditing = editingId === nodeId;
        const { hover, bind } = useHover();

        return (
            <div
                className="flex"
                style={{ ...commonText, paddingLeft: depth * step }}
                {...bind}
            >
                {label && 
                    <KeyEditable
                        style={label.startsWith("[") ? indexStyle : keyStyle}
                        label={label}
                        color={c.colon}
                        onRename={onRename}
                        editable={editable}
                    />
                }
                <span
                    style={{
                        color: c.boolean,
                        marginLeft: label ? 4 : 0,
                        cursor: editable ? "pointer" : "default",
                    }}
                    onClick={() => {
                        if (editable) setEditingId(nodeId);
                    }}
                >
                    {String(value)}
                </span>

                {editable && isEditing && hover && onChange && (
                    <ToogleBoolean
                        onChange={onChange}
                        setEditingId={setEditingId}
                        value={value}
                        fontSize={s.fontSize}
                        border={c.border}
                    />
                )}
                {editable && hover &&
                    <TypeSwitcher
                        current="boolean"
                        className="ml-auto"
                        onChangeType={(type) => {
                            let newVal: any = null;
                            switch (type) {
                                case "string": newVal = ""; break;
                                case "number": newVal = 0; break;
                                case "boolean": newVal = false; break;
                                case "null": newVal = null; break;
                                case "object": newVal = {}; break;
                                case "array": newVal = []; break;
                            }
                            onChange(newVal);
                        }}
                    />
                }
                {editable && hover && onDelete && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        style={{
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            color: "#f1aa9d9d",
                        }}
                    >
                        <MdDeleteForever size={16}  />
                    </button>
                )}
            </div>
        );
    }
    // === String ===
    if (typeof value === "string") {
        const { hover, bind } = useHover();

        return (
            <div 
                className="flex" 
                style={{ ...commonText, paddingLeft: depth * step }}
                {...bind}
            >
                {label && 
                    <KeyEditable
                        style={label.startsWith("[") ? indexStyle : keyStyle}
                        label={label}
                        color={c.colon}
                        onRename={onRename}
                        editable={editable}
                    />
                }
                <input
                    value={value}
                    disabled={!editable}
                    className="min-w-2"
                    style={{
                        ...commonText,
                        color: c.string,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        marginLeft: label ? 4 : 0,
                    }}
                    onChange={(e) => editable && onChange(e.target.value)}
                />
                {editable && hover &&
                    <TypeSwitcher
                        current="string"
                        onChangeType={(type) => {
                            let newVal: any = null;
                            switch (type) {
                                case "string": newVal = ""; break;
                                case "number": newVal = 0; break;
                                case "boolean": newVal = false; break;
                                case "null": newVal = null; break;
                                case "object": newVal = {}; break;
                                case "array": newVal = []; break;
                            }
                            onChange(newVal);
                        }}
                    />
                }
                {editable && hover && onDelete && (
                    <button className="ml-auto"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        style={{
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            color: "#f1aa9d9d",
                        }}
                    >
                        <MdDeleteForever size={16} />
                    </button>
                )}
            </div>
        );
    }
    // === Number ===
    if (typeof value === "number") {
        const { hover, bind } = useHover();

        return (
            <div 
                className="flex" 
                style={{ ...commonText, paddingLeft: depth * step }}
                {...bind}
            >
                {label && 
                    <KeyEditable
                        style={label.startsWith("[") ? indexStyle : keyStyle}
                        label={label}
                        color={c.colon}
                        onRename={onRename}
                        editable={editable}
                    />
                }
                <input
                    type="number"
                    value={String(value)}
                    disabled={!editable}
                    style={{
                        ...commonText,
                        color: c.number,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        width: "6em",
                        marginLeft: label ? 4 : 0,
                    }}
                    onChange={(e) => {
                        if (!editable) return;
                        const parsed = Number(e.target.value);
                        if (!isNaN(parsed)) onChange(parsed);
                    }}
                />
                {editable && hover &&
                    <TypeSwitcher
                        className="ml-auto"
                        current="number"
                        onChangeType={(type) => {
                            let newVal: any = null;
                            switch (type) {
                                case "string": newVal = ""; break;
                                case "number": newVal = 0; break;
                                case "boolean": newVal = false; break;
                                case "null": newVal = null; break;
                                case "object": newVal = {}; break;
                                case "array": newVal = []; break;
                            }
                            onChange(newVal);
                        }}
                    />
                }
                {editable && hover && onDelete && (
                    <button 
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete();
                        }}
                        style={{
                            cursor: "pointer",
                            background: "transparent",
                            border: "none",
                            color: "#f1aa9d9d",
                        }}
                    >
                        <MdDeleteForever size={16} />
                    </button>
                )}
            </div>
        );
    }
    // === Null ===
    if (value === null) {
        return (
            <div style={{ ...commonText, paddingLeft: depth * step }}>
                {label && 
                    <KeyEditable
                        style={label.startsWith("[") ? indexStyle : keyStyle}
                        label={label}
                        color={c.colon}
                        onRename={onRename}
                        editable={editable}
                    />
                }
                <span style={{ color: c.null, marginLeft: label ? 4 : 0 }}>
                    null
                </span>
            </div>
        );
    }

    // === Array ===
    if (Array.isArray(value)) {
        const { hover, bind } = useHover();

        return (
            <div style={{ ...commonText }} {...bind}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingLeft: depth * step,
                    }}
                    onClick={toggleCollapse}
                >
                    <div className="opacity-50">
                        {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
                    </div>
                    {label && (
                        <span 
                            className="opacity-50" 
                            style={label.startsWith("[") ? indexStyle : keyStyle}
                        >
                            { label }:
                        </span>
                    )}
                    <span className="opacity-50" style={{ color: c.type, marginLeft: 4 }}>Array</span>
                    <span className="opacity-50" style={{ color: c.brackets }}>[{value.length}]</span>
                    {hover && renderControls(
                        path ? () => {
                            if (onDelete) onDelete();
                        }: undefined,
                        () => {
                            let newVal: any = null;
                            if (value.length > 0) {
                                const first = value[0];
                                if (typeof first === "string") newVal = "";
                                else if (typeof first === "number") newVal = 0;
                                else if (typeof first === "boolean") newVal = false;
                                else if (Array.isArray(first)) newVal = [];
                                else if (typeof first === "object") newVal = {};
                            }
                            onChange([...value, newVal]);
                        }
                    )}
                </div>

                {/* Вложенные элементы */}
                {!collapsed && (
                    <div
                        style={{
                            marginLeft: step,            // смещение для бордера
                            borderLeft: depth >= 0 ? `1px solid ${c.border}` : "none",
                        }}
                    >
                        {value.map((item, i) => (
                            <JsonEditor
                                key={i}
                                value={item}
                                label={`[${i}]`}
                                path={nodeId}
                                depth={depth + 1}
                                onChange={(val) => {
                                    const copy = [...value];
                                    copy[i] = val;
                                    onChange(copy);
                                }}
                                onDelete={() => {
                                    const copy = [...value];
                                    copy.splice(i, 1);
                                    onChange(copy);
                                }}
                                theme={theme}
                                expandedPaths={expandedPaths}
                                defaultCollapsed={defaultCollapsed}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
    // === Object ===
    if (typeof value === "object" && !Array.isArray(value)) {
        const entries = Object.entries(value);
        const { hover, bind } = useHover();

        return (
            <div style={{ ...commonText }} {...bind}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingLeft: depth * step,
                    }}
                >
                    <div className="opacity-50" onClick={toggleCollapse}>
                        {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
                    </div>
                    {label &&
                        <KeyEditable
                            className="opacity-50"
                            style={label.startsWith("[") ? indexStyle : keyStyle}
                            label={label}
                            color={c.colon}
                            onRename={onRename}
                            editable={editable}
                        />
                    }
                    <span className="opacity-50" style={{ color: c.type, marginLeft: 4 }}>Object</span>
                    <span className="opacity-50" style={{ color: c.brackets }}>{"{" + entries.length + "}"}</span>
                    {hover && renderControlsObject(
                        path ? () => {
                            if (onDelete) onDelete();
                        } : undefined
                    )}
                </div>

                {adding &&
                    <AddField
                        depth={depth}
                        step={step}
                        color={c.string}
                        onAdd={(key, type) => {
                            let val: any;
                            switch (type) {
                                case "string": val = ""; break;
                                case "number": val = 0; break;
                                case "boolean": val = false; break;
                                case "null": val = null; break;
                                case "object": val = {}; break;
                                case "array": val = []; break;
                            }
                            onChange({ ...value, [key]: val });
                            setAdding(false);
                        }}
                        onCancel={() => setAdding(false)}
                    />
                }

                {/* Дети */}
                {!collapsed && (
                    <div
                        style={{
                            marginLeft: step,
                            borderLeft: depth >= 0 ? `1px solid ${c.border}` : "none",
                        }}
                    >
                        {entries.map(([k, v]) => (
                            <JsonEditor
                                key={k}
                                value={v}
                                label={k}
                                path={nodeId}
                                depth={depth + 1}
                                onChange={(val) => onChange({ ...value, [k]: val })}
                                onDelete={() => {
                                    const { [k]: _, ...rest } = value;
                                    onChange(rest);
                                }}
                                onRename={(oldKey, newKey) => {
                                    if (!newKey || oldKey === newKey) return;

                                    // если на самом верхнем уровне — отдаём наружу
                                    if (onRename) onRename(oldKey, newKey);
                                    else {
                                        // иначе локально меняем в объекте
                                        const { [oldKey]: val, ...rest } = value;
                                        onChange({ ...rest, [newKey]: val });
                                    }
                                }}
                                theme={theme}
                                expandedPaths={expandedPaths}
                                defaultCollapsed={defaultCollapsed}
                            />
                        ))}
                    </div>
                )}
            </div>
        );

    }

    return null;
}