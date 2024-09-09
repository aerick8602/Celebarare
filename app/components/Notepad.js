"use client";

import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import Toolbar from './Tools/Toolbar';
import ActionBar from './Tools/Actionbar';

const Notepad = () => {
    const [textBlocks, setTextBlocks] = useState([]);
    const [selectedBlock, setSelectedBlock] = useState(null);
    const [history, setHistory] = useState([]);
    const [redoStack, setRedoStack] = useState([]);

    useEffect(() => {
        if (history.length === 0 || JSON.stringify(textBlocks) !== JSON.stringify(history[history.length - 1])) {
            setHistory([...history, textBlocks]);
        }
    }, [textBlocks]);

    const handleUndo = () => {
        if (history.length > 1) {
            const prevState = history[history.length - 2];
            setRedoStack([textBlocks, ...redoStack]);
            setTextBlocks(prevState);
            setHistory(history.slice(0, -1));
        }
    };

    const handleRedo = () => {
        if (redoStack.length > 0) {
            const nextState = redoStack[0];
            setHistory([...history, nextState]);
            setTextBlocks(nextState);
            setRedoStack(redoStack.slice(1));
        }
    };

    const addTextBlock = () => {
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
        setTextBlocks([...textBlocks, newBlock]);
        setRedoStack([]);
    };

    const handleTextChange = (id, e) => {
        const updatedBlocks = textBlocks.map((block) =>
            block.id === id ? { ...block, text: e.target.value } : block
        );
        setTextBlocks(updatedBlocks);
    };

    const handleDrag = (id, e, data) => {
        const updatedBlocks = textBlocks.map((block) =>
            block.id === id ? { ...block, position: { x: data.x, y: data.y } } : block
        );
        setTextBlocks(updatedBlocks);
    };

    const handleFontChange = (e) => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, font: e.target.value } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const handleTextSizeIncrease = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, size: block.size + 10 } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const handleTextSizeDecrease = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, size: block.size - 10 } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const toggleBold = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, isBold: !block.isBold } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const toggleItalic = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, isItalic: !block.isItalic } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const toggleUnderline = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, isUnderline: !block.isUnderline } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const alignTextLeft = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, textAlign: 'left' } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const alignTextCenter = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, textAlign: 'center' } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const alignTextRight = () => {
        if (selectedBlock) {
            const updatedBlocks = textBlocks.map((block) =>
                block.id === selectedBlock.id ? { ...block, textAlign: 'right' } : block
            );
            setTextBlocks(updatedBlocks);
        }
    };

    const currentTextSize = selectedBlock ? selectedBlock.size : 16;

    return (
        <div className="w-full flex flex-col items-center">
            <ActionBar onUndo={handleUndo} onRedo={handleRedo} />
            <div className="relative border w-[690px] h-96 bg-white">
                {textBlocks.map((block) => (
                    <Draggable
                        key={block.id}
                        position={block.position}
                        onDrag={(e, data) => handleDrag(block.id, e, data)}
                        onStop={() => setSelectedBlock(block)}
                    >
                        <textarea
                            value={block.text}
                            onChange={(e) => handleTextChange(block.id, e)}
                            className="absolute"
                            style={{
                                fontFamily: block.font,
                                fontSize: `${block.size}px`,
                                fontWeight: block.isBold ? 'bold' : 'normal',
                                fontStyle: block.isItalic ? 'italic' : 'normal',
                                textDecoration: block.isUnderline ? 'underline' : 'none',
                                textAlign: block.textAlign,
                            }}
                        />
                    </Draggable>
                ))}
            </div>
            <Toolbar
                onFontChange={handleFontChange}
                onTextSizeIncrease={handleTextSizeIncrease}
                onTextSizeDecrease={handleTextSizeDecrease}
                onBold={toggleBold}
                onItalic={toggleItalic}
                onUnderline={toggleUnderline}
                onAlignLeft={alignTextLeft}
                onAlignCenter={alignTextCenter}
                onAlignRight={alignTextRight}
                onAddText={addTextBlock}
                onDownload={() => { }}
                currentTextSize={currentTextSize}
            />
        </div>
    );
};

export default Notepad;
