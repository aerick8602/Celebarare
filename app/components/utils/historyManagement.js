export const handleUndo = (history, redoStack, textBlocks) => {
    if (history.length > 1) {
        const prevState = history[history.length - 2];
        return {
            newBlocks: prevState,
            newHistory: history.slice(0, -1),
            newRedoStack: [textBlocks, ...redoStack]
        };
    }
    return { newBlocks: textBlocks, newHistory: history, newRedoStack: redoStack };
};

export const handleRedo = (history, redoStack, textBlocks) => {
    if (redoStack.length > 0) {
        const nextState = redoStack[0];
        return {
            newBlocks: nextState,
            newHistory: [...history, nextState],
            newRedoStack: redoStack.slice(1),
        };
    }
    return { newBlocks: textBlocks, newHistory: history, newRedoStack: redoStack };
};
