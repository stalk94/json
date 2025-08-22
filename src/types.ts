
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];

export type StyleConfig = {
    fontSize?: number | string
    fontFamily?: string
    lineHeight?: number | string
    step?: number
    colors?: {
        key?: string;
        string?: string;
        number?: string;
        boolean?: string;
        null?: string;
        brackets?: string;
        colon?: string;
        border?: string;
        type?: string;
        array?: string;
        object?: string;
        index?: string;
        pick?: string;
    };
}
export interface EditorProps {
    value: JSONValue;
    onChange: (val: JSONValue) => void;
    label?: string;
    theme?: StyleConfig;
    path?: string;
    onPick?: (path: string, value: JSONValue) => void; // теперь строка
    pickedPath?: string; // выбранный путь как строка
    expandedPaths?: string[];   // список раскрытых путей
    defaultCollapsed?: boolean;
    depth?: number
    onRename?: (oldKey: string, newKey: string) => void;
    onDelete?: () => void;
}
export interface PickerProps {
    value: JSONValue;
    onChange: (val: JSONValue) => void;
    label?: string;
    theme?: StyleConfig;
    path?: string;
    onPick?: (path: string, value: JSONValue) => void; // теперь строка
    pickedPath?: string; // выбранный путь как строка
    expandedPaths?: string[];   // список раскрытых путей
    defaultCollapsed?: boolean;
    depth?: number
    onToggle?: (nodeId: string) => void;  
}



export type JsonEditorProps = EditorProps & { 
    editable?: boolean
    type: 'pick' | 'edit' 
}
