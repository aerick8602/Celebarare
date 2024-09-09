"use client";
import React from 'react';
import Draggable from 'react-draggable';

const Canvas = ({ textBlocks, handleDrag, handleTextChange, setSelectedBlock }) => {
    return (
        <div className="relative border w-full h-96 bg-white w-full">
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
    );
};

export default Canvas;
