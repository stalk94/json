import type { StyleConfig } from './types';


const defaultTheme: Required<StyleConfig> = {
    fontSize: 14,
    step: 8,
    fontFamily: "monospace",
    lineHeight: 1.4,
    colors: {
        key: "#61afef",
        string: "#a0d57a",    // зеленоватый
        number: "#e79b55",    // оранжево-коричневый
        boolean: "#c678dd",
        null: "#c678dd",
        brackets: "#6c6c6c",
        colon: "#abb2bf",
        border: "#3e4451",
        type: "#6c6c6c",
        array: "#6c6c6c",
        object: "#6c6c6c",
        index: "#6c6c6c",  // индексы массивов
        pick: "#61afef",
    },
}


export default defaultTheme;