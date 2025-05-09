// src/components/NoteEditor.tsx
import { useState } from 'react';

export default function NoteEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="h-full flex flex-col bg-white border rounded p-4">
      <input
        type="text"
        placeholder="Note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border-b pb-2 mb-4 text-lg focus:outline-none"
      />
      <textarea
        placeholder="Write your note here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 resize-none focus:outline-none"
      />
      <button
        className="mt-4 self-end px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        // onClick: later hook up save functionality
      >
        Save
      </button>
    </div>
  );
}
