# React JSON Editor (Tailwind)

Beautiful and customizable JSON editor for React with **Tailwind CSS design**, **editable fields**, and **theme customization**.  
Supports editing, adding/removing fields, changing types (`string`, `number`, `boolean`, `null`, `object`, `array`) and nested structures.

---

## 🚀 Installation

```bash
npm install react-json-editor-tw
```

or

```bash
yarn add react-json-editor-tw
```

---

## 📦 Usage

```tsx
import React, { useState } from "react";
import JsonEditor from "react-json-editor-tw";

export default function App() {
  const [data, setData] = useState({
    name: "John",
    age: 30,
    active: true,
    tags: ["react", "tailwind"],
    profile: { email: "test@example.com" }
  });

  return (
    <div className="p-4">
      <JsonEditor
        value={data}
        onChange={setData}
        defaultCollapsed={false}
      />
    </div>
  );
}
```

---

## 🎨 Features

- 📂 Expandable/collapsible objects & arrays  
- 🖊 Editable fields (strings, numbers, booleans, nulls)  
- ➕ Add/remove keys & array items  
- 🔄 Change field type (string, number, boolean, null, object, array)  
- 🎨 Tailwind-based design with **theme customization**  
- ⚡ Lightweight, React-friendly component  

---

## ⚙ Props

| Prop              | Type                              | Default | Description |
|-------------------|-----------------------------------|---------|-------------|
| `value`           | `any`                             | —       | JSON data to display |
| `onChange`        | `(newVal: any) => void`           | —       | Callback when value changes |
| `defaultCollapsed`| `boolean`                         | `false` | Collapse all by default |
| `theme`           | `object`                          | built-in | Customize colors, fonts, spacing |
| `expandedPaths`   | `string[]`                        | —       | Force expand/collapse nodes |
| `onDelete`        | `(key: string) => void`           | —       | Handle deletion |
| `onRename`        | `(oldKey: string, newKey: string)`| —       | Handle rename of keys |

---

## 🎨 Theme Example

```ts
const theme = {
  fontSize: 14,
    step: 8,
    fontFamily: "monospace",
    lineHeight: 1.4,
    colors: {
        key: "#61afef",
        string: "#a0d57a",
        number: "#e79b55",
        boolean: "#c678dd",
        null: "#c678dd",
        brackets: "#6c6c6c",
        colon: "#abb2bf",
        border: "#3e4451",
        type: "#6c6c6c",
        array: "#6c6c6c",
        object: "#6c6c6c",
        index: "#6c6c6c",
        pick: "#61afef",
    }
}
```


## 📜 License

MIT © 2025 [stalk94]
