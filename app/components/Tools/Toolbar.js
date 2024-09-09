
import React from 'react';
import { FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight } from 'react-icons/fa';

const Toolbar = ({
    onFontChange,
    onTextSizeIncrease,
    onTextSizeDecrease,
    onBold,
    onItalic,
    onUnderline,
    onAlignLeft,
    onAlignCenter,
    onAlignRight,
    onAddText,
    onDownload,
    currentTextSize
}) => {
    return (
        <div className="flex flex-col items-center w-[700px] bg-gray-200 rounded-b-xl">
            <div className="flex flex-row justify-center items-center w-full p-3">
                <div className="flex items-center">
                    <select
                        onChange={onFontChange}
                        className="mr-2 p-1 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Verdana">Verdana</option>
                    </select>
                    <button
                        onClick={onTextSizeDecrease}
                        className="px-2 py-1 border border-gray-400 rounded-l-md bg-white hover:bg-gray-200"
                    >
                        -
                    </button>
                    <span className="px-3 py-1 border-t border-b border-gray-400">
                        {currentTextSize}px
                    </span>
                    <button
                        onClick={onTextSizeIncrease}
                        className="px-2 py-1 border border-gray-400 rounded-r-md bg-white hover:bg-gray-200"
                    >
                        +
                    </button>
                </div>
                <div className="flex ml-4 space-x-2">
                    <button
                        onClick={onBold}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaBold />
                    </button>
                    <button
                        onClick={onItalic}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaItalic />
                    </button>
                    <button
                        onClick={onUnderline}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaUnderline />
                    </button>
                </div>
                <div className="flex ml-4 space-x-2">
                    <button
                        onClick={onAlignLeft}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaAlignLeft />
                    </button>
                    <button
                        onClick={onAlignCenter}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaAlignCenter />
                    </button>
                    <button
                        onClick={onAlignRight}
                        className="p-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                    >
                        <FaAlignRight />
                    </button>
                </div>
            </div>
            <div className="flex justify-center space-x-4 mb-3">
                <button
                    onClick={onAddText}
                    className="px-4 py-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                >
                    Add New Text
                </button>
                <button
                    onClick={onDownload}
                    className="px-4 py-2 border border-gray-400 rounded-md bg-white hover:bg-gray-200"
                >
                    Download
                </button>
            </div>
        </div>
    );
};

export default Toolbar;
