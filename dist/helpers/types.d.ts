export interface AddFieldProps {
    depth: number;
    step: number;
    color?: string;
    onAdd: (key: string, type: string) => void;
    onCancel: () => void;
}
export type KeyEditableProps = {
    label: string;
    onRename?: (old: string, newKey: string) => void;
    editable?: boolean;
    style: React.CSSProperties;
    className?: string;
    color?: string;
};
