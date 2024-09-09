import React from 'react';
import { FaUndo, FaRedo } from 'react-icons/fa';

const ActionBar = ({ onUndo, onRedo }) => {
    return (
        <div className="flex justify-center items-center w-[700px] h-12 bg-gray-200 rounded-t-xl shadow-lg">
            <button
                onClick={onUndo}
                className="p-2 mx-4 bg-white border border-gray-400 rounded-md hover:bg-gray-200 transition-all"
            >
                <FaUndo />
            </button>
            <button
                onClick={onRedo}
                className="p-2 mx-4 bg-white border border-gray-400 rounded-md hover:bg-gray-200 transition-all"
            >
                <FaRedo />
            </button>
        </div>
    );
};

export default ActionBar;
