import React, { useState, useMemo } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { useJsonEditorContext } from "./provider";
import defaultTheme from './theme';
import type { PickerProps } from './types';


export default function JsonEditor({
    value,
    onChange,
    label,
    theme = defaultTheme,
    path = "",
    depth = 0,
    onPick,
    pickedPath,
    expandedPaths,
    onToggle,
    defaultCollapsed = true,
}: PickerProps) {
    const [collapsedState, setCollapsedState] = useState(defaultCollapsed);
    const { editingId, setEditingId, editable } = useJsonEditorContext();
    const step = theme.step ?? 12;

    const nodeId = useMemo(
        () => (path ? path + "/" + (label ?? "root") : label ?? "root"),
        [path, label]
    );

    const isExternallyExpanded = expandedPaths?.includes(nodeId) ?? false;
    const collapsed = expandedPaths
        ? !isExternallyExpanded
        : collapsedState;

    const toggleCollapse = () => {
        if (expandedPaths) {
            onToggle?.(nodeId);  // дергаем наверх, если список контролируется извне
        } else {
            setCollapsedState(!collapsedState);  // локальное управление
        }
    }

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

    const isPicked = pickedPath === nodeId;
    
    const renderPick = () =>
        onPick && (
            <input
                type="radio"
                checked={!!isPicked}
                readOnly
                onClick={(e) => {
                    e.stopPropagation();
                    onPick(nodeId, value);
                }}
                style={{
                    marginLeft: 8,
                    cursor: "pointer",
                    accentColor: c.pick,
                }}
            />
    );


    // === Boolean ===
    if (typeof value === "boolean") {
        const isEditing = editingId === nodeId;

        return (
            <div
                className="flex items-center"
                style={{ ...commonText, paddingLeft: depth * step }}
            >
                {label && (
                    <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                        {label}
                        <span style={{ color: c.index }}>:</span>
                    </span>
                )}
                <span
                    style={{
                        color: c.boolean,
                        cursor: editable ? "pointer" : "default",
                        marginLeft: label ? 4 : 0,
                    }}
                    onClick={() => editable && setEditingId(nodeId)}
                >
                    {String(value)}
                </span>
                {renderPick()}
                {editable && isEditing && onChange && (
                    <span style={{ display: "inline-flex", gap: 4, marginLeft: 20 }}>
                        <button
                            onClick={() => {
                                onChange(true);
                                setEditingId(null);
                            }}
                            style={{
                                cursor: "pointer",
                                border: `1px solid ${c.border}`,
                                borderRadius: 4,
                                padding: "0 4px",
                                fontSize: s.fontSize,
                                background: value === true ? "#ffffff96" : "transparent",
                                color: "white",
                                opacity: value === false ? 0.6 : 1,
                            }}
                        >
                            ✔
                        </button>
                        <button
                            onClick={() => {
                                onChange(false);
                                setEditingId(null);
                            }}
                            style={{
                                cursor: "pointer",
                                border: `1px solid ${c.border}`,
                                borderRadius: 4,
                                padding: "0 4px",
                                fontSize: s.fontSize,
                                background: value === false ? "#ffffff96" : "transparent",
                                color: "white",
                                opacity: value === true ? 0.6 : 1,
                            }}
                        >
                            ✖
                        </button>
                    </span>
                )}
            </div>
        );
    }
    // === string ===
    if (typeof value === "string") {
        return (
            <div
                className="flex items-center"
                style={{ ...commonText, paddingLeft: depth * step }}
            >
                {label && (
                    <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                        {label}
                        <span style={{ color: c.index }}>:</span>
                    </span>
                )}
                <input
                    value={value}
                    disabled={!editable || !onChange}
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
                {renderPick()}
            </div>
        );
    }
    // === number ===
    if (typeof value === "number") {
        return (
            <div
                className="flex items-center"
                style={{ ...commonText, paddingLeft: depth * step }}
            >
                {label && (
                    <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                        {label}
                        <span style={{ color: c.index }}>:</span>
                    </span>
                )}
                <input
                    type="number"
                    value={String(value)}
                    disabled={!editable || !onChange}
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
                        const val = e.target.value;
                        if (val === "" || val === "-") {
                            onChange(0);
                        } else {
                            const parsed = Number(val);
                            if (!isNaN(parsed)) onChange(parsed);
                        }
                    }}
                />
                {renderPick()}
            </div>
        );
    }
    // === Null ===
    if (value === null) {
        return (
            <div
                className="flex items-center"
                style={{ ...commonText, paddingLeft: depth * step }}
            >
                {label && (
                    <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                        {label}
                        <span style={{ color: c.colon }}>:</span>
                    </span>
                )}
                <span style={{ color: c.null, marginLeft: label ? 4 : 0 }}>null</span>
                {renderPick()}
            </div>
        );
    }

    // === Array ===
    if (Array.isArray(value)) {
        return (
            <div style={{ ...commonText }}>
                <div
                    onClick={toggleCollapse}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingLeft: depth * step, // ✅ как в первом
                    }}
                >
                    <div style={{ opacity: 0.55 }}>
                        {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
                    </div>
                    {label && (
                        <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                            {label}:
                        </span>
                    )}
                    <span style={{ color: c.type, marginLeft: label ? 4 : 0 }}>Array</span>
                    <span style={{ color: c.brackets }}>[{value.length}]</span>
                    {renderPick()}
                </div>
                {!collapsed && (
                    <div
                        style={{
                            marginLeft: step, // ✅ смещение детей
                            borderLeft: `1px solid ${c.border}`,
                        }}
                    >
                        {value.map((item, i) => (
                            <JsonEditor
                                key={i}
                                value={item}
                                label={`[${i}]`}
                                path={nodeId}
                                depth={depth + 1} // ✅ пробрасываем глубину
                                onChange={(val) => {
                                    const copy = [...value];
                                    copy[i] = val;
                                    onChange(copy);
                                }}
                                theme={theme}
                                onPick={onPick}
                                pickedPath={pickedPath}
                                expandedPaths={expandedPaths}
                                onToggle={onToggle} 
                                defaultCollapsed={defaultCollapsed}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
    // === Object ===
    if (typeof value === "object") {
        const entries = Object.entries(value);

        return (
            <div style={{ ...commonText }}>
                <div
                    onClick={toggleCollapse}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                        paddingLeft: depth * step, // ✅ как в первом
                    }}
                >
                    <div style={{ opacity: 0.55 }}>
                        {collapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowDown />}
                    </div>
                    {label && (
                        <span style={label.startsWith("[") ? indexStyle : keyStyle}>
                            {label}:
                        </span>
                    )}
                    <span style={{ color: c.type, marginLeft: label ? 4 : 0 }}>Object</span>
                    <span style={{ color: c.brackets }}>{"{" + entries.length + "}"}</span>
                    {renderPick()}
                </div>
                {!collapsed && (
                    <div
                        style={{
                            marginLeft: step, // ✅ смещение детей
                            borderLeft: `1px solid ${c.border}`,
                        }}
                    >
                        {entries.map(([k, v]) => (
                            <JsonEditor
                                key={k}
                                value={v}
                                label={k}
                                path={nodeId}
                                depth={depth + 1} // ✅ пробрасываем глубину
                                onChange={(val) => onChange({ ...value, [k]: val })}
                                theme={theme}
                                onPick={onPick}
                                pickedPath={pickedPath}
                                expandedPaths={expandedPaths}
                                onToggle={onToggle} 
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