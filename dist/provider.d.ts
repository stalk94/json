import React from "react";
type EditorContextType = {
    editingId: string | null;
    setEditingId: (id: string | null) => void;
    editable: boolean;
};
export declare const useJsonEditorContext: () => EditorContextType;
export declare const JsonEditorProvider: React.FC<{
    children: React.ReactNode;
    editable?: boolean;
}>;
export {};
