export const addTextBlock = (textBlocks) => {
    const newBlock = {
        id: textBlocks.length + 1,
        text: 'New Text Block',
        position: { x: textBlocks.length * 20, y: textBlocks.length * 20 },
        font: 'Arial',
        size: 16,
        isBold: false,
        isItalic: false,
        isUnderline: false,
        textAlign: 'left',
    };
    return [...textBlocks, newBlock];
};

export const handleTextChange = (id, e, textBlocks) => {
    return textBlocks.map((block) =>
        block.id === id ? { ...block, text: e.target.value } : block
    );
};

export const handleDrag = (id, data, textBlocks) => {
    return textBlocks.map((block) =>
        block.id === id ? { ...block, position: { x: data.x, y: data.y } } : block
    );
};
