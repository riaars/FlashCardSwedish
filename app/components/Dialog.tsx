import React from "react";

interface DialogProps {
  title: string;
  content: string;
  toggleDialog: () => void;
  restart: () => void;
}
function Dialog({ title, content, toggleDialog, restart }: DialogProps) {
  return (
    <div className="dialog-overlay fixed top-0">
      <div className="flex flex-col p-4 w-80 bg-white rounded">
        <div className="text-xl  font-bold mt-2 mb-2">{title}</div>
        <div className="text-sm">{content}</div>
        <div className="flex flex-row justify-end gap-1 mt-3">
          <button
            className="ml-2 p-2 bg-blue-500 text-white font-bold mt-2 mb-2 border rounded-full"
            onClick={toggleDialog}
          >
            Share
          </button>
          <button
            className="ml-2 p-2 bg-green-500 text-white font-bold mt-2 mb-2 border rounded-full"
            onClick={restart}
          >
            Play again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dialog;
