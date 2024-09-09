export const handleFontChange = (selectedBlock, e, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, font: e.target.value } : block
        );
    }
    return textBlocks;
};

export const handleTextSizeIncrease = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, size: block.size + 10 } : block
        );
    }
    return textBlocks;
};

export const handleTextSizeDecrease = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, size: block.size - 10 } : block
        );
    }
    return textBlocks;
};

export const toggleBold = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, isBold: !block.isBold } : block
        );
    }
    return textBlocks;
};

export const toggleItalic = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, isItalic: !block.isItalic } : block
        );
    }
    return textBlocks;
};

export const toggleUnderline = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, isUnderline: !block.isUnderline } : block
        );
    }
    return textBlocks;
};

export const alignTextLeft = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, textAlign: 'left' } : block
        );
    }
    return textBlocks;
};

export const alignTextCenter = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, textAlign: 'center' } : block
        );
    }
    return textBlocks;
};

export const alignTextRight = (selectedBlock, textBlocks) => {
    if (selectedBlock) {
        return textBlocks.map((block) =>
            block.id === selectedBlock.id ? { ...block, textAlign: 'right' } : block
        );
    }
    return textBlocks;
};
