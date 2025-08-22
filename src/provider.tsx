import React, { createContext, useContext, useState } from "react";

type EditorContextType = {
	editingId: string | null;
	setEditingId: (id: string | null) => void;
	editable: boolean;
};

const JsonEditorContext = createContext<EditorContextType | null>(null);

export const useJsonEditorContext = () => {
	const ctx = useContext(JsonEditorContext);
	if (!ctx) throw new Error("JsonEditor must be inside JsonEditorProvider");
	return ctx;
};

export const JsonEditorProvider: React.FC<{
	children: React.ReactNode;
	editable?: boolean;
}> = ({ children, editable = true }) => {
	const [editingId, setEditingId] = useState<string | null>(null);

	return (
		<JsonEditorContext.Provider value={{ editingId, setEditingId, editable }}>
			{children}
		</JsonEditorContext.Provider>
	);
};